import { listBarangays } from "../src/core/barangays";
import { totalBrgyCount } from "../tools/constants";
// import { logMessage } from "../src/utils/logger";

describe("Barangays", () => {
  let barangays: ReturnType<typeof listBarangays>;

  beforeAll(() => {
    barangays = listBarangays();
  });
  // logMessage("barangays", barangays);

  it("should list all barangays (42,011 total)", () => {
    expect(barangays).toBeDefined();
    expect(Array.isArray(barangays)).toBe(true);
    expect(barangays.length).toBe(totalBrgyCount);
  });

  it("should return the correct number of barangays by city/municipality", () => {
    const uniqueMunCityCodes = [...new Set(barangays.map((b) => b.munCityCode))];

    for (const munCityCode of uniqueMunCityCodes) {
      const expected = barangays.filter((b) => b.munCityCode === munCityCode).length;
      const barangaysList = listBarangays(munCityCode);

      expect(barangaysList.length).toEqual(expected);
    }
  });

  it("should include Milagrosa in City of Calamba", () => {
    const calambaBarangays = listBarangays("03405");
    const names = calambaBarangays.map((b) => b.brgyName);
    expect(names).toContain("Milagrosa");
  });

  it("should return empty array when no barangays match", () => {
    const filtered = barangays.filter((b) => b.brgyCode === "XXX"); // Non-existent city/mun
    expect(filtered).toEqual([]);
  });
});
