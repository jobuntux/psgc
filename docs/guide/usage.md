# Usage

The **@jobuntux/psgc** package provides functions for working with the Philippine Standard Geographic Code (PSGC).  
You can easily list regions, provinces, municipalities/cities, and barangays.

## 1. Importing

In your project, import the functions you need:

```typescript
import {
  listRegions,
  listProvinces,
  listMuncities,
  listBarangays
} from "@jobuntux/psgc";
```

## 2. List regions

```typescript
const regions = listRegions();
console.log(regions);
```

## 3. List provinces

```typescript
const provinces = listProvinces();
console.log(provinces);
```

## 4. List municipalities or cities

```typescript
const muncities = listMuncities("03014"); // pass a province code
console.log(muncities);
```

## 5. List barangays

```typescript
const barangays = listBarangays("01410"); // pass a municipality/city code
console.log(barangays);
```

## Notes

- Each function returns an **array of objects** with relevant codes and names.  
- Codes follow the official PSGC format.  
- You can use these codes to filter data for cascading dropdowns in your UI (see [**Examples** section](/examples/react)).
