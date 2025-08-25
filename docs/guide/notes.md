# Notes

This package is designed to simplify working with the **Philippine Standard Geographic Code (PSGC)** dataset.  
Here are some important notes when using it:

## Data Source
- The data comes from the **Philippine Statistics Authority (PSA)** official PSGC releases.  
- It is regularly updated to match the latest quarterly release.

## Codes

- **Region codes** are 2 digits (e.g., "13" for NCR).  
- **Province codes** are 3 digits.  
- **Municipality/City codes** are 5 digits.  
- **Barangay codes** are 8 digits.  

These codes follow the official PSGC structure.

## Data Structure
- All functions return arrays of **plain JavaScript objects**.  
- Each object includes both the **code** and **name** fields, for example:

```json
{
  "provCode": "0128",
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
