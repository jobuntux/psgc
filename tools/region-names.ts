const REGION_NAMES: Record<string, string> = {
  "13": "National Capital Region (NCR)",
  "14": "Cordillera Administrative Region (CAR)",
  "01": "Region I (Ilocos Region)",
  "02": "Region II (Cagayan Valley)",
  "03": "Region III (Central Luzon)",
  "04": "Region IV-A (CALABARZON)",
  "17": "MIMAROPA Region",
  "05": "Region V (Bicol Region)",
  "06": "Region VI (Western Visayas)",
  "18": "Negros Island Region (NIR)",
  "07": "Region VII (Central Visayas)",
  "08": "Region VIII (Eastern Visayas)",
  "09": "Region IX (Zamboanga Peninsula)",
  "10": "Region X (Northern Mindanao)",
  "11": "Region XI (Davao Region)",
  "12": "Region XII (SOCCSKSARGEN)",
  "16": "Region XIII (Caraga)",
  "19": "Bangsamoro Autonomous Region in Muslim Mindanao (BARMM)",
};

export const REGION_ORDER = [
  "13",
  "14",
  "01",
  "02",
  "03",
  "04",
  "17",
  "05",
  "06",
  "18",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "16",
  "19",
];

export function prettyPrintProvinceCounts(counts: Record<string, number>): string {
  let output = "expectations: Record<string, number> = {\n";
  for (const code of REGION_ORDER) {
    if (counts[code] !== undefined) {
      const name = REGION_NAMES[code] ?? "";
      output += `  "${code}": ${counts[code]}, // ${name}\n`;
    }
  }
  output += "};";
  return output;
}
