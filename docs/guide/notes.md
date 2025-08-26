# Notes

This package is designed to simplify working with the **Philippine Standard Geographic Code (PSGC)** dataset.  
Here are some important notes when using it:

## Data Source
- The data comes from the **Philippine Statistics Authority (PSA)** official PSGC releases.  
- It is regularly updated to match the latest quarterly release.

## Definition

### HUCs

**Highly Urbanized Cities**

- **Not under provincial jurisdiction** → They report directly to the national government.
- **Residents don’t vote for provincial officials** (like governor).
- They still appear under their geographic region, but not under a province.
- In the PSGC dataset, HUCs are usually marked with cityClass: "HUC" and have a “synthetic” province entry for dataset consistency.

#### 🏙 Examples of HUCs

- National Capital Region (NCR) cities (e.g., Quezon City, Manila, Makati, Pasig, etc.).
- Outside NCR:
  - Cebu City
  - Davao City
  - Iloilo City
  - Baguio City
  - Zamboanga City
  - Cagayan de Oro City
  - Bacolod City

As of 2025-2Q, there are **33 HUCs** in the Philippines.

## Codes

- **Region codes** are 2 digits (e.g., "13" for NCR).  
- **Province codes** are 3 digits.  
- **Municipality/City codes identifiers** are 5 digits.  
- **Barangay codes identifiers** are 8 digits.  

These codes follow the official PSGC structure.

## Data Structure
- All functions return arrays of **plain JavaScript objects**.  
- Each object includes both the **code** and **name** fields, for example:

```json
{
  "provCode": "028",
  "provName": "Ilocos Norte"
}
```

## Cascading Dropdowns
- Use `listRegions`, `listProvinces`, `listMuncities`, and `listBarangays` together to build dependent dropdowns.  
- Always reset child dropdowns when a parent selection changes.  

Example:  
- Reset **municipality** and **barangay** when the **province** changes.  
- Reset **barangay** when the **municipality** changes.

## Performance
- Dataset lookups are **O(1)** for most operations (internally indexed for efficiency).  
- Still, avoid unnecessarily re-running lookups inside loops. Store results when possible.

## Disclaimer
- This library is not an official PSA product.  
- Always validate against the latest PSA publication if your use case requires strict accuracy.
