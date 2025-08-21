import fs from "fs";
import path from "path";

export function logMessage(message: string, mode: "development" | "test" = "development") {
  const logsDir = path.join(process.cwd(), "logs");
  fs.mkdirSync(logsDir, { recursive: true });

  const logFile = path.join(logsDir, `${mode}.log`);
  const timestamp = new Date().toISOString();

  fs.appendFileSync(logFile, `[${timestamp}] ${message}\n`);
}
