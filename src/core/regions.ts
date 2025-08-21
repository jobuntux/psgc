import type { Region } from "@/types/geo";
import { loadJsonFile } from "@/data/loaders";
import { CURRENT_VERSION } from "@/config";

export function listRegions(version: string = CURRENT_VERSION): Region[] {
  return loadJsonFile<Region[]>(version, "regions.json");
}
