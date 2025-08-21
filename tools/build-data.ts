import fs from "fs";
import path from "path";
import csv from "csv-parser";
import type { Region, Province, MunCity, Barangay } from "../src/types/geo";

const RAW_DIR = "raw";
const DATA_DIR = "data";

// 1. Get all CSVs in raw/
const csvFiles = fs.readdirSync(RAW_DIR).filter((f) => f.endsWith(".csv"));
if (csvFiles.length === 0) {
  console.error("❌ No CSV files found in raw/");
  process.exit(1);
}

// 2. Map CSV basenames (without .csv)
const csvVersions = csvFiles.map((file) => path.basename(file, ".csv"));

// 3. Remove data folders that don’t match any CSV
fs.readdirSync(DATA_DIR).forEach((folder) => {
  if (!csvVersions.includes(folder)) {
    const fullPath = path.join(DATA_DIR, folder);
    fs.rmSync(fullPath, { recursive: true, force: true });
    console.log(`🗑️ Removed old data folder: ${folder}`);
  }
});

// 4. Process each CSV normally
csvFiles.forEach((file) => {
  const INPUT_FILE = path.join(RAW_DIR, file);
  const versionName = path.basename(INPUT_FILE, ".csv");
  const OUTPUT_DIR = path.join("data", versionName);
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const REGION_ORDER = [
    "13", // NCR
    "14", // CAR
    "01",
    "02",
    "03",
    "04",
    "17",
    "05",
    "06",
    "18",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "16", // Caraga
    "19", // BARMM
  ];

  const REGIONS_FILE = path.join(OUTPUT_DIR, "regions.json");
  const PROVINCES_FILE = path.join(OUTPUT_DIR, "provinces.json");
  const MUNCITIES_FILE = path.join(OUTPUT_DIR, "muncities.json");
  const BARANGAYS_FILE = path.join(OUTPUT_DIR, "barangays.json");

  const regions: Record<string, Region> = {};
  const provinces: Record<string, Province> = {};
  const muncities: Record<string, MunCity> = {};
  const barangays: Record<string, Barangay> = {};

  const NCR_PROV_KEY = "13"; // Region 13 (NCR), no provCode
  provinces[NCR_PROV_KEY] = {
    psgcCode: "1300000000",
    regCode: NCR_PROV_KEY,
    provCode: "000", // empty, since NCR doesn’t really have provinces
    provName: "National Capital Region (NCR)",
  };

  fs.createReadStream(INPUT_FILE)
    .pipe(csv())
    .on("data", (row: Record<string, string>) => {
      const psgcCode = row["10-digit PSGC"];
      const geoName = row["Name"];
      const oldGeoName = row["Old names"];
      const geoLevel = row["Geographic Level"];
      // const geoCityClass = row["City Class"];

      const regCode = psgcCode.substring(0, 2);
      const provCode = psgcCode.substring(2, 5);
      const munCityCode = psgcCode.substring(5, 7);
      const brgyCode = psgcCode.substring(7, 10);

      // Regions
      if (geoLevel === "Reg") {
        regions[regCode] = {
          psgcCode,
          regCode,
          regionName: geoName,
        };
      }
      // Provinces (include NCR as a pseudo-province)
      else if (geoLevel === "Prov" && regCode !== "13") {
        provinces[regCode + provCode] = {
          psgcCode,
          regCode,
          provCode: regCode + provCode,
          provName: geoName,
        };
      }
      // Municipalities / Cities / SubMunicipalities
      else if (geoLevel === "City" || geoLevel === "Mun" || geoLevel === "SubMun") {
        muncities[regCode + provCode + munCityCode] = {
          psgcCode,
          regCode,
          provCode: regCode + provCode,
          // geoCityClass === "City" || geoCityClass === "ICC" || regCode === "13"
          //   ? "000"
          //   : provCode,
          munCityCode: regCode + provCode + munCityCode,
          munCityName: geoName,
          munCityOldName: oldGeoName,
        };
      }
      // Barangays
      else if (geoLevel === "Bgy") {
        barangays[regCode + provCode + munCityCode + brgyCode] = {
          psgcCode,
          regCode,
          provCode: regCode + provCode,
          munCityCode: regCode + provCode + munCityCode,
          brgyCode: regCode + provCode + munCityCode + brgyCode,
          brgyName: geoName,
          brgyOldName: oldGeoName,
        };
      }
    })
    .on("end", () => {
      // Sort Regions (Follow REGION_ORDER)
      const sortedRegions = Object.values(regions).sort(
        (a, b) => REGION_ORDER.indexOf(a.regCode) - REGION_ORDER.indexOf(b.regCode),
      );

      // Sort Provinces alphabetically, but NCR always first
      const sortedProvinces = Object.values(provinces).sort((a, b) => {
        // NCR special case → always first
        if (a.regCode === "13" && (a.provCode === "" || a.provCode === "000")) return -1;
        if (b.regCode === "13" && (b.provCode === "" || b.provCode === "000")) return 1;

        // Otherwise, sort alphabetically by provName
        return a.provName.localeCompare(b.provName);
      });

      // Sort Municipalities/Cities/Submunicipalities alphabetically
      const sortedMuncities = Object.values(muncities).sort((a, b) =>
        a.munCityName.localeCompare(b.munCityName),
      );

      // Sort Barangays alphabetically
      const sortedBarangays = Object.values(barangays).sort((a, b) =>
        a.brgyName.localeCompare(b.brgyName),
      );

      fs.writeFileSync(REGIONS_FILE, JSON.stringify(sortedRegions, null, 2));
      fs.writeFileSync(PROVINCES_FILE, JSON.stringify(sortedProvinces, null, 2));
      fs.writeFileSync(MUNCITIES_FILE, JSON.stringify(sortedMuncities, null, 2));
      fs.writeFileSync(BARANGAYS_FILE, JSON.stringify(sortedBarangays, null, 2));

      console.log(`✅ Finished! JSON files created in ${OUTPUT_DIR}`);
    });
});
