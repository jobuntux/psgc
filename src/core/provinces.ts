import type { Province } from "@/types/geo";
import { loadJsonFile } from "@/data/loaders";
import { CURRENT_VERSION } from "@/config";

/***************************************************************
 * List provinces. If `regCode` is provided, filter by region. *
 **************************************************************/
export function listProvinces(version: string = CURRENT_VERSION, regCode?: string): Province[] {
  const provinces = loadJsonFile<Province[]>(version, "provinces.json");
  return regCode ? provinces.filter((p) => p.regCode === regCode) : provinces;
}
