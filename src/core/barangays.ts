import type { Barangay } from "@/types/geo";
import { loadJsonFile } from "@/data/loaders";
import { CURRENT_VERSION } from "@/config";

export function listBarangays(version: string = CURRENT_VERSION): Barangay[] {
  return loadJsonFile<Barangay[]>(version, "barangays.json");
}
