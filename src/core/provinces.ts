import type { Province } from "@/types/geo";
import rawProvinces from "@/../data/2025-2Q/provinces.json";

const provinces = rawProvinces as Province[];

/*********************
 * List of Provinces
 ********************/
export function listProvinces(regCode?: string): Province[] {
  return regCode ? provinces.filter((p) => p.regCode === regCode) : provinces;
}
