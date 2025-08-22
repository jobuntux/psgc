# PSGC (Philippine Standard Geographic Code)

A TypeScript-ready NPM package providing up-to-date **Philippine Standard Geographic Code (PSGC)** data, including **Regions, Provinces, Municipalities/Cities, and Barangays**, based on the official releases of the Philippine Statistics Authority (PSA).

---

## ✨ Features

- 📦 Pre-packaged JSON data (no database setup required).
- 🔍 Strongly typed with TypeScript.
- 🗂️ Easy utilities to query **regions, provinces, municipalities/cities, and barangays**.
- 🔄 Updated quarterly in sync with PSA’s official releases.
- 🚀 Ready for both Node.js (backend) and modern frontend frameworks.

---

## 🗂 PSGC Code Structure

The PSA defines PSGC codes using a **10-digit format**:

RR PPP MM BBB

- RR → Region code
- PPP → Provincial code / Highly Urbanized City (HUC) / Independent Component City (ICC) / Component City
- MM → Municipality/City code
- BBB → Barangay code

Derived identifiers:

- PPPMM → Municipality/City identifier
- PPPMMBBB → Barangay identifier

📌 Example:

- 0434040000 → Calamba City
- 0434040057 → Barangay Milagrosa (Tulo), Calamba City

![pgsc-new-coding-structure](/public/pgsc-new-coding-structure.png)

---

## 📥 Installation

```bash
npm install @jobuntux/psgc
# or
yarn add @jobuntux/psgc
```

---

## 🚀 Usage

### Importing:

```js
import { listRegions, listProvinces, listMuncities, listBarangays } from "@jobuntux/psgc";
```

### Example: Get all Regions

```js
// Get all regions
const regions = listRegions();
console.log(regions.count);
// → 18 // Regions count based on PSA PSGC dataset
console.log(regions[0]);
// {
//   psgcCode: "1300000000",
//   regCode: "13",
//   regionName: "National Capital Region (NCR)"
// }
```

### Example: Provinces in a Region

```js
// Get all provinces in the dataset
const provinces = listProvinces();
console.log(provinces.count);
// → 83
```

### Example: Municipalities/Cities in a Province

```js
// Get all municipalities/cities
const muncities = listMuncities();
console.log(muncities.count);
// → 1,656

// Example: City of Makati
const makatiCity = listMuncities("803");
console.log(makatiCity.count);
// → 1

// Example: Muncities of Laguna
const lagunaMuncities = listMuncities("034");
console.log(lagunaMuncities.count);
// → 30
```

### Example: Barangays in a City of Calamba

```js
// Get all barangays under a municipality/city
const calambaBrgy = listBarangays("03405"); // Example: All barangays in the City of Calamba
console.log(calambaBrgy.count);
// → 54
```

---

## 📊 Data Counts (2025-2Q)

The dataset includes:

- 18 Regions
- 83 Provinces (including NCR as pseudo-province)
- 1,656 Municipalities & Cities (149 Cities, 1,493 Municipalities, 14 Sub-Municipalities)
- 42,011 Barangays

---

## 📅 Latest Official PSGC Update

| Field                  | Details                                                                                                                                                                                           |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Title**              | Philippine Standard Geographic Code (PSGC)                                                                                                                                                        |
| **Originator**         | Philippine Statistics Authority (PSA)                                                                                                                                                             |
| **Publication Date**   | 30 June 2025                                                                                                                                                                                      |
| **Abstract**           | The PSGC is a systematic classification and coding of geographic areas in the country based on the four hierarchical levels: region, province, city/municipality, and barangay.                   |
| **Process**            | Updated based on official changes in the administrative structure of the country through Republic Acts and local ordinances ratified via plebiscites conducted by the COMELEC.                    |
| **Progress**           | Ongoing (updated quarterly)                                                                                                                                                                       |
| **Access Constraints** | None                                                                                                                                                                                              |
| **Use Constraints**    | Acknowledgement of the Philippine Statistics Authority (PSA) as the source                                                                                                                        |
| **Disclaimer**         | - Distributed without warranty of any kind, expressed or implied. <br> - Responsibility for interpretation and use lies with the user. <br> - PSA is not liable for damages arising from its use. |
| **Primary Contact**    | Statistical Classifications Division (SCD), Standards Service                                                                                                                                     |
| **Contact Persons**    | Emerson M. Aquino / Von Jeric F. Adona / Emmanuel V. Prades                                                                                                                                       |
| **Organization**       | Philippine Statistics Authority (PSA)                                                                                                                                                             |
| **Telephone**          | (+632) 8376-1867                                                                                                                                                                                  |
| **Fax**                | None                                                                                                                                                                                              |
| **Email**              | scd.staff@psa.gov.ph                                                                                                                                                                              |

> <h4><i>Source: <a href="https://psa.gov.ph/classification/psgc/">https://psa.gov.ph/classification/psgc/</a></i></h4>

---

## 📜 License

MIT © [jobuntux](https://github.com/jobuntux)
