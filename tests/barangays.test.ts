import { listBarangays } from "../src/core/barangays";
import { totalBrgyCount } from "../tools/constants";
// import { logMessage } from "../src/utils/logger";

describe("Barangays", () => {
  it("should list all barangays (42,011 total)", () => {
    const barangays = listBarangays();
    // logMessage("barangays", barangays);

    expect(barangays).toBeDefined();
    expect(Array.isArray(barangays)).toBe(true);
    expect(barangays.length).toBe(totalBrgyCount); // Based on PSA PSGC dataset
  });

  it("should filter barangays by city/municipality", () => {
    const barangays = listBarangays("03405"); // City of Calamba
    expect(barangays.length).toEqual(54); // Number of barangays in City of Calamba
  });

  it("should filter barangays by city/municipality", () => {
    const barangays = listBarangays("30100"); // City of Angeles
    expect(barangays.length).toEqual(33); // Number of barangays in City of Angeles
  });

  it("should fetch a specific barangay", () => {
    const barangays = listBarangays();
    const filtered = barangays.filter((b) => b.brgyCode === "03405057"); // Example: Milagrosa (Tulo), City of Calamba

    expect(filtered[0].brgyName).toBe("Milagrosa");
  });

  it("should return empty array when no barangays match", () => {
    const barangays = listBarangays();
    const filtered = barangays.filter((b) => b.brgyCode === "XXX"); // Non-existent city/mun
    expect(filtered).toEqual([]);
  });
});
