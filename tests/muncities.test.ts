import { listMuncities } from "../src/core/muncities";

describe("Muncities", () => {
  it("should list all muncities (1656 total)", () => {
    const muncities = listMuncities();
    expect(muncities).toBeDefined();
    expect(Array.isArray(muncities)).toBe(true);
    expect(muncities.length).toBe(1_656); // 149 Cities + 1493 Municipalities + 14 SubMunicipalities
  });

  it("should filter muncities by province", () => {
    const muncities = listMuncities();
    const filtered = muncities.filter((m) => m.provCode === "034"); // Example: City of Calamba
    expect(filtered.length).toBeGreaterThan(0);

    filtered.forEach((m) => {
      expect(m.regCode).toBe("04"); // Laguna
    });
  });

  it("should return only provinces belonging to a specific region", () => {
    // NCR Special
    const ncrCities = listMuncities("000");

    expect(Array.isArray(ncrCities)).toBe(true);
    expect(ncrCities.length).toEqual(31);

    ncrCities.forEach((ncrCity) => {
      expect(ncrCity.regCode).toBe("13");
    });
  });

  it("should return empty array when no muncities match", () => {
    const muncities = listMuncities("XXX"); // Non-existent province
    expect(muncities).toEqual([]);
  });
});
