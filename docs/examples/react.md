# React Example

Here’s the React cascading dropdown in action:

<iframe src="/psgc/react-app/index.html" style="width:100%;height:500px;border:1px solid #ccc;border-radius:8px;"></iframe>

## Source Code

```typescript
import { useState } from 'react';
import './App.css';
import {
  listRegions,
  listProvinces,
  listMuncities,
  listBarangays,
} from '@jobuntux/psgc';
import reactLogo from './assets/react.svg';

function App() {
  const regions = listRegions();

  const [regionCode, setRegionCode] = useState('');
  const [provinceCode, setProvinceCode] = useState('');
  const [munCityCode, setMunCityCode] = useState('');
  const [barangayCode, setBarangayCode] = useState('');

  const provinces = regionCode ? listProvinces(regionCode) : [];
  const muncities = provinceCode ? listMuncities(provinceCode) : [];

  const selectedProvince = provinces.find((p) => p.provCode === provinceCode);
  const isHUC = selectedProvince?.cityClass === 'HUC';

  // Uniform barangay lookup always via munCityCode
  const effectiveMunCityCode = isHUC
    ? muncities[0]?.munCityCode // synthetic HUC entry like "30100"
    : munCityCode;

  const barangays = effectiveMunCityCode ? listBarangays(effectiveMunCityCode) : [];

  return (
    <div className="App">
      <div className="header">
        <img src={reactLogo} alt="React logo" className="logo" />
      </div>

      <div className="form">
        {/* Debug */}
        <div className="debug">
          <p>Region Code: {regionCode || '—'}</p>
          <p>Province Code: {provinceCode || '—'}</p>
          <p>Municipality Code: {munCityCode || (isHUC ? effectiveMunCityCode : '—')}</p>
          <p>Barangay Code: {barangayCode || '—'}</p>
        </div>

        {/* Region */}
        <select
          value={regionCode}
          onChange={(e) => {
            setRegionCode(e.target.value);
            setProvinceCode('');
            setMunCityCode('');
            setBarangayCode('');
          }}
        >
          <option value="">-- Select Region --</option>
          {regions.map((reg) => (
            <option key={reg.regCode} value={reg.regCode}>
              {reg.regionName}
            </option>
          ))}
        </select>

        {/* Province */}
        <select
          value={provinceCode}
          onChange={(e) => {
            setProvinceCode(e.target.value);
            setMunCityCode('');
            setBarangayCode('');
          }}
          disabled={!regionCode}
        >
          <option value="">-- Select Province --</option>
          {provinces.map((prov) => (
            <option key={prov.provCode} value={prov.provCode}>
              {prov.provName}
            </option>
          ))}
        </select>

        {/* Municipality / City */}
        <select
          value={munCityCode}
          onChange={(e) => {
            setMunCityCode(e.target.value);
            setBarangayCode('');
          }}
          disabled={!provinceCode || isHUC || muncities.length === 0}
        >
          <option value="">-- Select Municipality / City --</option>
          {muncities.map((mun) => (
            <option key={mun.munCityCode} value={mun.munCityCode}>
              {mun.munCityName}
            </option>
          ))}
        </select>

        {/* Barangay */}
        <select
          value={barangayCode}
          onChange={(e) => setBarangayCode(e.target.value)}
          disabled={!provinceCode || (!isHUC && !munCityCode)}
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
      </div>
    </div>
  );
}

export default App;

```
