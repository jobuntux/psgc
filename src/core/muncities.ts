import type { TMunCity } from "@/types/geo";
import rawMuncities from "@/../data/2025-2Q/muncities.json";

const muncities = rawMuncities as TMunCity[];

const munCityIndex: Record<string, TMunCity[]> = muncities.reduce(
  (acc, m) => {
    (acc[m.provCode] ??= []).push(m);
    return acc;
  },
  {} as Record<string, TMunCity[]>,
);

// Dynamically collect NCR provCodes (regCode 13, skip the fake 000 entry)
const NCR_PROVCODES: string[] = Array.from(
  new Set(muncities.filter((m) => m.regCode === "13").map((m) => m.provCode)),
);

/**************************************************************************************
 * Returns the list of municipalities, cities, and sub-municipalities,
 * optionally filtered by a province code.
 *
 * Dataset reference:
 * - Based on PSA PSGC official release as of June 30, 2025 (2025-2Q)
 * - Source: https://psa.gov.ph/classification/psgc
 *
 * This is typically used when you need to:
 * - List all municipalities and cities across the Philippines
 * - Retrieve only the muncities that belong to a specific province (via `provCode`)
 * - Access muncity metadata as defined in `muncities.json`
 *
 * If a `provCode` is provided, the result will only include muncities belonging
 * to that province. If no matching muncities exist, an empty array is returned.
 * If no `provCode` is provided, all muncities are returned.
 *
 * @param {string} [provCode] - Optional province code to filter muncities.
 * @returns {MunCity[]} An array of municipality/city objects.
 *
 * @example
 * ```ts
 * import { listMuncities } from "@jobuntux/psgc";
 *
 * // List all muncities (1656 total in PSGC 2025-2Q dataset)
 * const allMuncities = listMuncities();
 * console.log(allMuncities.length); // 1656
 *
 * // List muncities belonging to Laguna (Province Code: 034)
 * const lagunaMuncities = listMuncities("034");
 * console.log(lagunaMuncities.map(m => m.munCityName));
 * // e.g. ["City of Calamba", "City of San Pablo", ...]
 *
 * // NCR special case: Makati City (Province Code: 803)
 * const makati = listMuncities("803");
 * console.log(makati.length); // 1
 * console.log(makati[0].munCityName); // "City of Makati"
 *
 * // Non-existent province code
 * console.log(listMuncities("XXX")); // []
 * ```
 **************************************************************************************/
export function listMuncities(provCode?: string): TMunCity[] {
  if (!provCode) return [...muncities];

  if (provCode === "000") {
    // Special case: NCR, return all its cities
    return NCR_PROVCODES.flatMap((code) => munCityIndex[code] ?? []);
  }

  return munCityIndex[provCode] ? [...munCityIndex[provCode]] : [];
}
