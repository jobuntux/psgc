import fs from "fs";
import path from "path";

export function loadJsonFile<T>(version: string, filename: string): T {
  const fullPath = path.join(process.cwd(), "data", version, filename);
  const raw = fs.readFileSync(fullPath, "utf-8");
  const parsed: unknown = JSON.parse(raw);
  return parsed as T;
}
