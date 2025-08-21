import { CURRENT_VERSION } from "../src/config";
import { listMuncities } from "../src/core/muncities";

describe("Muncities", () => {
  it("should list all muncities (1656 total)", () => {
    const muncities = listMuncities(CURRENT_VERSION);
    expect(muncities).toBeDefined();
    expect(Array.isArray(muncities)).toBe(true);
    expect(muncities.length).toBe(1_656); // 149 Cities + 1493 Municipalities + 14 SubMunicipalities
  });

  it("should filter muncities by province", () => {
    const muncities = listMuncities(CURRENT_VERSION);
    const filtered = muncities.filter((m) => m.provCode === "04034"); // Example: City of Calamba
    expect(filtered.length).toBeGreaterThan(0);

    filtered.forEach((m) => {
      expect(m.regCode).toBe("04"); // Laguna
    });
  });

  it("should return only provinces belonging to a specific region", () => {
    // NCR Special
    const ncrMakati = listMuncities(CURRENT_VERSION, "13803");

    expect(Array.isArray(ncrMakati)).toBe(true);
    expect(ncrMakati.length).toEqual(1);

    ncrMakati.forEach((makati) => {
      expect(makati.munCityName).toBe("City of Makati");
    });
  });

  it("should return empty array when no muncities match", () => {
    const muncities = listMuncities(CURRENT_VERSION, "XXX"); // Non-existent province
    expect(muncities).toEqual([]);
  });
});
