import fs from "fs";
import path from "path";

/**
 * Logs messages or objects into a file under ./logs/{mode}.log
 *
 * @param message - A string label or message
 * @param data - Optional data to log (object, array, etc.)
 * @param mode - Log mode (defaults to "development")
 */
export function logMessage(
  message: string,
  data?: unknown,
  mode: "development" | "test" = "development",
) {
  const logsDir = path.join(process.cwd(), "logs");
  fs.mkdirSync(logsDir, { recursive: true });

  const logFile = path.join(logsDir, `${mode}.log`);
  const timestamp = new Date().toISOString();

  let entry = `[${timestamp}] ${message}`;
  if (data !== undefined) {
    try {
      entry += " " + JSON.stringify(data, null, 2); // pretty-print objects
    } catch {
      entry += " " + String(data);
    }
  }

  fs.appendFileSync(logFile, entry + "\n");
}
