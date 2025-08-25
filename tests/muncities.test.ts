import { listMuncities } from "../src/core/muncities";
import { munCitiesCount } from "../tools/constants";
// import { logMessage } from "../src/utils/logger";

describe("Muncities", () => {
  it("should list all muncities (1656 total)", () => {
    const muncities = listMuncities();
    // logMessage("muncities", muncities);

    expect(muncities).toBeDefined();
    expect(Array.isArray(muncities)).toBe(true);
    expect(muncities.length).toBe(munCitiesCount);
  });

  it("should filter muncities by province", () => {
    const cityOfCalamba = listMuncities("034");

    expect(cityOfCalamba.length).toBeGreaterThan(0);
    cityOfCalamba.forEach((calamba) => {
      expect(calamba.regCode).toBe("04"); // Laguna
    });
  });

  it("should return empty array when no muncities match", () => {
    const muncities = listMuncities("XXX"); // Non-existent province
    expect(muncities).toEqual([]);
  });
});
