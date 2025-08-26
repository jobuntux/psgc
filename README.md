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
- PPP → Provincial code / Highly Urbanized City (HUC) / Independent Component City (ICC) / Component City (CC)
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
# or
pnpm add @jobuntux/psgc
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

## 🚀 Usage

Refer to https://jobuntux.github.io/psgc/

---

## 📜 License

MIT © [jobuntux](https://github.com/jobuntux)
