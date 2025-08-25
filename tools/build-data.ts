import fs from "fs";
import path from "path";
import csv from "csv-parser";

import type {
  TRegion,
  TProvince,
  TMunCity,
  TBarangay,
  TGeoLevel,
  TCityClass,
} from "../src/types/geo";
import { logMessage } from "../src/utils/logger";
import { prettyPrintProvinceCounts, REGION_ORDER } from "./region-names";

const RAW_DIR = path.resolve("raw");
const DATA_DIR = path.resolve("data");

// 1. Get all CSVs in raw/
const csvFiles = fs.readdirSync(RAW_DIR).filter((f) => f.endsWith(".csv"));
if (csvFiles.length === 0) {
  console.error("❌ No CSV files found in raw/");
  throw new Error("No CSV files found in raw/");
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
  const OUTPUT_DIR = path.join(DATA_DIR, versionName);
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const REGIONS_FILE = path.join(OUTPUT_DIR, "regions.json");
  const PROVINCES_FILE = path.join(OUTPUT_DIR, "provinces.json");
  const MUNCITIES_FILE = path.join(OUTPUT_DIR, "muncities.json");
  const BARANGAYS_FILE = path.join(OUTPUT_DIR, "barangays.json");

  const regions: Record<string, TRegion> = {};
  const provinces: Record<string, TProvince> = {};
  const muncities: Record<string, TMunCity> = {};
  const barangays: Record<string, TBarangay> = {};

  fs.createReadStream(INPUT_FILE)
    .pipe(csv())
    .on("data", (row: Record<string, string>) => {
      const psgcCode = row["10-digit PSGC"] as string;
      const geoName = row["Name"] as string;
      const geoOldName = row["Old names"] as string;
      const geoLevel = row["Geographic Level"] as TGeoLevel;
      const cityLevel = row["City Class"] as TCityClass;

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
      // Provinces
      else if (geoLevel === "Prov") {
        provinces[provCode] = {
          psgcCode,
          regCode,
          provCode,
          provName: geoName,
          provOldName: geoOldName,
          cityClass: cityLevel || null,
        };
      }
      // HUCs
      else if (cityLevel == "HUC") {
        provinces[provCode] = {
          psgcCode,
          regCode,
          provCode,
          provName: geoName,
          provOldName: geoOldName,
          cityClass: cityLevel || null,
        };

        muncities[provCode + "00"] = {
          psgcCode: provCode + "00",
          regCode,
          provCode,
          munCityCode: provCode + "00",
          munCityName: geoName,
          munCityOldName: geoOldName,
        };
      }
      // Municipalities / Cities / SubMunicipalities
      else if (
        cityLevel === "CC" ||
        cityLevel == "ICC" ||
        geoLevel === "Mun" ||
        geoLevel === "SubMun"
      ) {
        muncities[provCode + munCityCode] = {
          psgcCode,
          regCode,
          provCode,
          munCityCode: provCode + munCityCode,
          munCityName: geoName,
          munCityOldName: geoOldName,
        };
      }
      // Barangays
      else if (geoLevel === "Bgy") {
        barangays[provCode + munCityCode + brgyCode] = {
          psgcCode,
          regCode,
          provCode,
          munCityCode: provCode + munCityCode,
          brgyCode: provCode + munCityCode + brgyCode,
          brgyName: geoName,
          brgyOldName: geoOldName,
        };
      }
    })
    .on("end", () => {
      /*******************************************
       * - This marks the start of deriving data.
       */
      const provinceAndHUCCount: Record<string, number> = {};

      for (const p of Object.values(provinces)) {
        // provinceAndHUCCount
        provinceAndHUCCount[p.regCode] = (provinceAndHUCCount[p.regCode] ?? 0) + 1;
      }

      logMessage(prettyPrintProvinceCounts(provinceAndHUCCount));

      /** - This marks the end of deriving data.
       *****************************************/

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

      // Write minified JSON (no whitespace, compact)
      fs.writeFileSync(REGIONS_FILE, JSON.stringify(sortedRegions));
      fs.writeFileSync(PROVINCES_FILE, JSON.stringify(sortedProvinces));
      fs.writeFileSync(MUNCITIES_FILE, JSON.stringify(sortedMuncities));
      fs.writeFileSync(BARANGAYS_FILE, JSON.stringify(sortedBarangays));

      console.log(`✅ Finished! JSON files created in ${OUTPUT_DIR}`);
    });
});
