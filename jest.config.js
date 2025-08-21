/** @type {import('jest').Config} */
export default {
  preset: "ts-jest/presets/default-esm", // ESM-friendly preset
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.test.json", // 👈 modern location
        useESM: true,
      },
    ],
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  extensionsToTreatAsEsm: [".ts"],
};
