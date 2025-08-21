import { listProvinces } from "../src/core";

describe("listProvinces", () => {
  it("should return the correct count per region", () => {
    const expectations: Record<string, number> = {
      "13": 1, // NCR
      "14": 6, // CAR
      "01": 4, // Region I
      "02": 5, // Region II
      "03": 7, // Region III
      "04": 5, // CALABARZON
      "17": 5, // MIMAROPA
      "05": 6, // Region V
      "06": 5, // Region VI
      "18": 3, // NIR
      "07": 2, // Region VII
      "08": 6, // Region VIII
      "09": 3, // Region IX
      "10": 5, // Region X
      "11": 5, // Region XI
      "12": 4, // Region XII
      "16": 5, // Caraga
      "19": 6, // BARMM
    };

    for (const [regCode, expectedCount] of Object.entries(expectations)) {
      const provinces = listProvinces(regCode);
      expect(provinces.length).toBe(expectedCount);
    }
  });

  it("should list all provinces (82 total + NCR = 83)", () => {
    const provinces = listProvinces();
    expect(provinces).toBeDefined();
    expect(Array.isArray(provinces)).toBe(true);
    expect(provinces.length).toBe(83); // Based on PSA PSGC dataset
  });

  it("should return all provinces for the current version", () => {
    const provinces = listProvinces();
    expect(Array.isArray(provinces)).toBe(true);
    expect(provinces.length).toBeGreaterThan(0);

    // Example check for known province
    const laguna = provinces.find((p) => p.provName === "Laguna");
    expect(laguna).toBeDefined();
    expect(laguna?.regCode).toBe("04");
  });

  it("should return only provinces belonging to a specific region", () => {
    const region4Provinces = listProvinces("04");

    expect(Array.isArray(region4Provinces)).toBe(true);
    expect(region4Provinces.length).toEqual(5); // Ca-La-Ba-R-Zon

    // Ensure all returned provinces are from Region IV-A
    region4Provinces.forEach((p) => {
      expect(p.regCode).toBe("04");
    });

    // Example: check if Laguna is in Region IV-A list
    const laguna = region4Provinces.find((p) => p.provName === "Laguna");
    expect(laguna).toBeDefined();
  });

  it("should return an empty array if no provinces match the region code", () => {
    const result = listProvinces("XXX"); // Non-existent province
    expect(result).toEqual([]);
  });
});
