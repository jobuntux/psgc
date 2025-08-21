import fs from "fs";
import path from "path";

// Path to data folder
const DATA_DIR = path.join(process.cwd(), "data");

// Get all subdirectories in data/
const versions = fs
  .readdirSync(DATA_DIR, { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name)
  .sort(); // sorts alphabetically (e.g., 2025-1Q, 2025-2Q, ...)

// Latest version is the last after sorting
export const AVAILABLE_VERSIONS = versions;
export const CURRENT_VERSION = versions[versions.length - 1];
