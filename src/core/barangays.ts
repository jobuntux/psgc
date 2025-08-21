import type { Barangay } from "@/types/geo";
import rawBarangays from "@/../data/2025-2Q/barangays.json";

const barangays = rawBarangays as Barangay[];

/*********************
 * List of Barangays
 ********************/
export function listBarangays(munCityCode?: string): Barangay[] {
  return munCityCode ? barangays.filter((b) => b.munCityCode === munCityCode) : barangays;
}
