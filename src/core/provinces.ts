import type { Province } from "@/types/geo";
import rawProvinces from "@/../data/2025-2Q/provinces.json";

const provinces = rawProvinces as Province[];

const provinceIndex: Record<string, Province[]> = provinces.reduce(
  (acc, p) => {
    (acc[p.regCode] ??= []).push(p);
    return acc;
  },
  {} as Record<string, Province[]>,
);

/**************************************************************************************
 * Returns the list of provinces, optionally filtered by a region code.
 *
 * Dataset reference:
 * - Based on PSA PSGC official release as of June 30, 2025 (2025-2Q)
 * - Source: https://psa.gov.ph/classification/psgc
 *
 * This is typically used when you need to:
 * - List all provinces in the Philippines (e.g., for dropdowns or lookup tables)
 * - Retrieve only the provinces that belong to a specific region (via `regCode`)
 * - Access province metadata as defined in `provinces.json`
 *
 * If a `regCode` is provided, the result will only include provinces belonging
 * to that region. If no matching provinces exist, an empty array is returned.
 * If no `regCode` is provided, all provinces are returned.
 *
 * @param {string} [regCode] - Optional region code to filter provinces.
 * @returns {Province[]} An array of province objects.
 *
 * @example
 * ```ts
 * import { listProvinces } from "@jobuntux/psgc";
 *
 * // List all provinces (83 total, including NCR as "Metro Manila")
 * const allProvinces = listProvinces();
 * console.log(allProvinces.length); // 83
 *
 * // List provinces belonging to Region IV-A (CALABARZON)
 * const calabarzonProvinces = listProvinces("04");
 * console.log(calabarzonProvinces.length); // 5
 * console.log(calabarzonProvinces.map(p => p.provName));
 * // ["Batangas", "Cavite", "Laguna", "Quezon", "Rizal"]
 *
 * // Non-existent region code
 * console.log(listProvinces("XXX")); // []
 * ```
 **************************************************************************************/
export function listProvinces(regCode?: string): Province[] {
  return regCode ? [...(provinceIndex[regCode] ?? [])] : [...provinces];
}
