import type { MunCity } from "@/types/geo";
import rawMuncities from "@/../data/2025-2Q/muncities.json";

const muncities = rawMuncities as MunCity[];

/********************************************************
 * List of Municipalities / Cities / Sub-municipalities
 *******************************************************/
export function listMuncities(provCode?: string): MunCity[] {
  return provCode ? muncities.filter((m) => m.provCode === provCode) : muncities;
}
