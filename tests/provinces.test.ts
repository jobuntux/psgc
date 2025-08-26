import { listProvinces } from "../src/core";
import { provinceAndHUCCount } from "../tools/constants";
// import { logMessage } from "../src/utils/logger";

describe("listProvinces", () => {
  it("should return the correct count per region", () => {
    /**NOTE:
     * - derived from `tools/build-data.ts`
     */
    const expectations: Record<string, number> = {
      "13": 16, // National Capital Region (NCR)
      "14": 7, // Cordillera Administrative Region (CAR)
      "01": 4, // Region I (Ilocos Region)
      "02": 5, // Region II (Cagayan Valley)
      "03": 9, // Region III (Central Luzon)
      "04": 6, // Region IV-A (CALABARZON)
      "17": 6, // MIMAROPA Region
      "05": 6, // Region V (Bicol Region)
      "06": 6, // Region VI (Western Visayas)
      "18": 4, // Negros Island Region (NIR)
      "07": 5, // Region VII (Central Visayas)
      "08": 7, // Region VIII (Eastern Visayas)
      "09": 4, // Region IX (Zamboanga Peninsula)
      "10": 7, // Region X (Northern Mindanao)
      "11": 6, // Region XI (Davao Region)
      "12": 5, // Region XII (SOCCSKSARGEN)
      "16": 6, // Region XIII (Caraga)
      "19": 6, // Bangsamoro Autonomous Region in Muslim Mindanao (BARMM)
    };

    for (const [regCode, expectedCount] of Object.entries(expectations)) {
      const provinces = listProvinces(regCode);
      expect(provinces.length).toBe(expectedCount);
    }
  });

  it("should list all provinces and HUCs (115 total)", () => {
    const provinces = listProvinces();
    // logMessage("PROVINCES", provinces);

    expect(provinces).toBeDefined();
    expect(Array.isArray(provinces)).toBe(true);
    expect(provinces.length).toBe(provinceAndHUCCount);
  });

  it("should test return provinces and HUCs of Region 4", () => {
    const region4Provinces = listProvinces("04");
    // logMessage("region4Provinces", region4Provinces);
    const expectedPatterns = [/Batangas/i, /Cavite/i, /Laguna/i, /Quezon/i, /Rizal/i, /Lucena/i];

    expect(Array.isArray(region4Provinces)).toBe(true);
    expect(region4Provinces.length).toEqual(expectedPatterns.length);

    const names = region4Provinces.map((p) => p.provName.trim());
    expectedPatterns.forEach((pattern) => {
      expect(names.some((name) => pattern.test(name))).toBe(true);
    });
  });

  it("should return an empty array if no provinces match the region code", () => {
    const result = listProvinces("XXX"); // Non-existent province
    expect(result).toEqual([]);
  });
});
