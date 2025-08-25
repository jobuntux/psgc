# React Example

Here’s the React cascading dropdown in action:

<iframe src="/psgc/react-app/index.html" style="width:100%;height:500px;border:1px solid #ccc;border-radius:8px;"></iframe>

## Source Code

```tsx
import { useState } from "react";
import "./App.css";
import {
  listProvinces,
  listMuncities,
  listBarangays,
} from "@jobuntux/psgc";
import reactLogo from "./assets/react.svg";

function App() {
  const provinces = listProvinces();

  const [provinceCode, setProvinceCode] = useState("");
  const [munCityCode, setMunCityCode] = useState("");
  const [barangayCode, setBarangayCode] = useState("");

  const muncities = provinceCode ? listMuncities(provinceCode) : [];
  const barangays = munCityCode ? listBarangays(munCityCode) : [];

  return (
    <div className="App">
      <div className="header">
        <img src={reactLogo} alt="React logo" className="logo" />
      </div>

      <div className="form">
        <select
          value={provinceCode}
          onChange={(e) => {
            setProvinceCode(e.target.value);
            setMunCityCode("");
            setBarangayCode("");
          }}
        >
          <option value="">-- Select Province --</option>
          {provinces.map((prov) => (
            <option key={prov.provCode} value={prov.provCode}>
              {prov.provName}
            </option>
          ))}
        </select>

        {provinceCode && (
          <select
            value={munCityCode}
            onChange={(e) => {
              setMunCityCode(e.target.value);
              setBarangayCode("");
            }}
          >
            <option value="">-- Select Municipality / City --</option>
            {muncities.map((mun) => (
              <option key={mun.munCityCode} value={mun.munCityCode}>
                {mun.munCityName}
              </option>
            ))}
          </select>
        )}

        {munCityCode && (
          <select
            value={barangayCode}
            onChange={(e) => setBarangayCode(e.target.value)}
          >
            <option value="">-- Select Barangay --</option>
            {barangays.map((brgy) => {
              const brgyFullName = brgy.brgyOldName
                ? `${brgy.brgyName} (${brgy.brgyOldName})`
                : brgy.brgyName;
              return (
                <option key={brgy.brgyCode} value={brgy.brgyCode}>
                  {brgyFullName}
                </option>
              );
            })}
          </select>
        )}
      </div>
    </div>
  );
}

export default App;
```
