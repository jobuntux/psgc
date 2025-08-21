import type { Region } from "@/types/geo";
import rawRegions from "@/../data/2025-2Q/regions.json";

const regions = rawRegions as Region[];

/*******************
 * List of Regions
 ******************/
export function listRegions(): Region[] {
  return regions;
}
