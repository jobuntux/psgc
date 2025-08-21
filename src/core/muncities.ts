import type { MunCity } from "@/types/geo";
import { loadJsonFile } from "@/data/loaders";
import { CURRENT_VERSION } from "@/config";

export function listMuncities(version: string = CURRENT_VERSION, provCode?: string): MunCity[] {
  const muncities = loadJsonFile<MunCity[]>(version, "muncities.json");
  return provCode ? muncities.filter((m) => m.provCode === provCode) : muncities;
}
