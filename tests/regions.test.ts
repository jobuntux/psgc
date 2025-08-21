import { listRegions } from "../src/core/regions";
import { CURRENT_VERSION } from "../src/config";

describe("listRegions", () => {
  it("should list all 18 regions", () => {
    const regions = listRegions(CURRENT_VERSION);
    expect(regions).toBeDefined();
    expect(Array.isArray(regions)).toBe(true);
    expect(regions.length).toBe(18); // Based on PSA PSGC dataset
  });

  it("should include NCR (regCode 13)", () => {
    const regions = listRegions(CURRENT_VERSION);
    const ncr = regions.find((r) => r.regCode === "13");
    expect(ncr).toBeDefined();
    expect(ncr?.regionName).toMatch(/National Capital Region/i);
  });

  it("should include BARMM (regCode 19)", () => {
    const regions = listRegions(CURRENT_VERSION);
    const barmm = regions.find((r) => r.regCode === "19");
    expect(barmm).toBeDefined();
    expect(barmm?.regionName).toMatch(/BARMM/i);
  });

  it("should return unique region codes", () => {
    const regions = listRegions(CURRENT_VERSION);
    const codes = regions.map((r) => r.regCode);
    const uniqueCodes = new Set(codes);
    expect(uniqueCodes.size).toBe(codes.length);
  });

  it("should return empty array when no regions match", () => {
    const regions = listRegions(CURRENT_VERSION);
    const filtered = regions.filter((r) => r.regCode === "XXX"); // Non-existent region
    expect(filtered).toEqual([]);
  });
});
