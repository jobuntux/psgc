import type { TBarangay } from "@/types/geo";
import rawBarangays from "@/../data/2025-2Q/barangays.json";

const barangays = rawBarangays as TBarangay[];

const barangayIndex: Record<string, TBarangay[]> = barangays.reduce(
  (acc, b) => {
    (acc[b.munCityCode] ??= []).push(b);
    return acc;
  },
  {} as Record<string, TBarangay[]>,
);

/**************************************************************************************
 * Returns the list of barangays, optionally filtered by a municipality/city code.
 *
 * Dataset reference:
 * - Based on PSA PSGC official release as of June 30, 2025 (2025-2Q)
 * - Source: https://psa.gov.ph/classification/psgc
 *
 * This is typically used when you need to:
 * - List all barangays in the Philippines
 * - Retrieve only the barangays that belong to a specific municipality or city (via `munCityCode`)
 * - Access barangay metadata as defined in `barangays.json`
 *
 * If a `munCityCode` is provided, the result will only include barangays belonging
 * to that municipality/city. If no matching barangays exist, an empty array is returned.
 * If no `munCityCode` is provided, all barangays are returned.
 *
 * @param {string} [munCityCode] - Optional municipality/city code to filter barangays.
 * @returns {Barangay[]} An array of barangay objects.
 *
 * @example
 * ```ts
 * import { listBarangays } from "@jobuntux/psgc";
 *
 * // List all barangays (42,011 total in PSGC 2025-2Q dataset)
 * const allBarangays = listBarangays();
 * console.log(allBarangays.length); // 42011
 *
 * // List barangays belonging to City of Calamba (MunCity Code: 03405)
 * const calambaBarangays = listBarangays("03405");
 * console.log(calambaBarangays.length); // 54
 *
 * // Find a specific barangay (Milagrosa in Calamba)
 * const milagrosa = allBarangays.find(b => b.brgyCode === "03405057");
 * console.log(milagrosa?.brgyName); // "Milagrosa"
 *
 * // Non-existent munCityCode
 * console.log(listBarangays("XXX")); // []
 * ```
 **************************************************************************************/
export function listBarangays(munCityCode?: string): TBarangay[] {
  return munCityCode ? [...(barangayIndex[munCityCode] ?? [])] : [...barangays];
}
