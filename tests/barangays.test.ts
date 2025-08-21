import { listBarangays } from "../src/core/barangays";

describe("Barangays", () => {
  it("should list all barangays (42,011 total)", () => {
    const barangays = listBarangays();
    expect(barangays).toBeDefined();
    expect(Array.isArray(barangays)).toBe(true);
    expect(barangays.length).toBe(42_011); // Based on PSA PSGC dataset
  });

  it("should filter barangays by city/municipality", () => {
    const barangays = listBarangays("03405");
    expect(barangays.length).toEqual(54);
  });

  it("should fetch a specific barangay", () => {
    const barangays = listBarangays();
    const filtered = barangays.filter((b) => b.brgyCode === "03405057"); // Example: Milagrosa (Tulo), City of Calamba

    filtered.forEach((b) => {
      expect(b.brgyName).toBe("Milagrosa");
    });
  });

  it("should return empty array when no barangays match", () => {
    const barangays = listBarangays();
    const filtered = barangays.filter((b) => b.brgyCode === "XXX"); // Non-existent city/mun
    expect(filtered).toEqual([]);
  });
});
