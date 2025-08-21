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
    const ncrMakati = listMuncities("803");

    expect(Array.isArray(ncrMakati)).toBe(true);
    expect(ncrMakati.length).toEqual(1);

    ncrMakati.forEach((makati) => {
      expect(makati.munCityName).toBe("City of Makati");
    });
  });

  it("should return empty array when no muncities match", () => {
    const muncities = listMuncities("XXX"); // Non-existent province
    expect(muncities).toEqual([]);
  });
});
