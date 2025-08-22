import type { Region } from "@/types/geo";
import rawRegions from "@/../data/2025-2Q/regions.json";

const regions = rawRegions as Region[];

/**************************************************************************************
 * Returns the full list of available regions.
 *
 * Dataset reference:
 * - Based on PSA PSGC official release as of June 30, 2025 (2025-2Q)
 * - Source: https://psa.gov.ph/classification/psgc
 *
 * This is typically used when you need to:
 * - Populate dropdowns, selectors, or filters with region data
 * - Iterate over all defined regions for processing or validation
 * - Access region metadata as defined in `regions.json`
 *
 * @returns {Region[]} An array of region objects, each representing a defined region.
 *
 * @example
 * ```ts
 * import { listRegions } from "@jobuntux/psgc";
 *
 * const regions = listRegions();
 * console.log(regions);
 * // [
 * //   {
 * //     "psgcCode": "1300000000",
 * //     "regCode": "13",
 * //     "regionName": "National Capital Region (NCR)"
 * //   },
 * //   {
 * //     "psgcCode": "1400000000",
 * //     "regCode": "14",
 * //     "regionName": "Cordillera Administrative Region (CAR)"
 * //   },
 * //   ...
 * // ]
 *
 * console.log(regions.count); // 18
 *
 * console.log(regions[0].regionName); // "National Capital Region (NCR)"
 * ```
 **************************************************************************************/
export function listRegions(): Region[] {
  return regions;
}
