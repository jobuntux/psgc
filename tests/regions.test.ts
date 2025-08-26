import { listRegions } from "../src/core/regions";
import { totalRegionsCount } from "../tools/constants";
// import { logMessage } from "../src/utils/logger";

describe("listRegions", () => {
  let regions: ReturnType<typeof listRegions>;

  beforeAll(() => {
    regions = listRegions();
  });
  // logMessage("regions", regions);

  it("should list all 18 regions", () => {
    expect(regions).toBeDefined();
    expect(Array.isArray(regions)).toBe(true);
    expect(regions.length).toBe(totalRegionsCount);
  });

  it("should include NCR (regCode 13)", () => {
    const ncr = regions.find((r) => r.regCode === "13");
    expect(ncr).toBeDefined();
    expect(ncr?.regionName).toMatch(/National Capital Region/i);
  });

  it("should include BARMM (regCode 19)", () => {
    const barmm = regions.find((r) => r.regCode === "19");
    expect(barmm).toBeDefined();
    expect(barmm?.regionName).toMatch(/BARMM/i);
  });

  it("should return unique region codes", () => {
    const codes = regions.map((r) => r.regCode);
    const uniqueCodes = new Set(codes);
    expect(uniqueCodes.size).toBe(totalRegionsCount);
  });

  it("should return empty array when no regions match", () => {
    const filtered = regions.filter((r) => r.regCode === "XXX"); // Non-existent region
    expect(filtered).toEqual([]);
  });
});
