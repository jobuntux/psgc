# Vue Example

Here’s the Vue cascading dropdown in action:

<iframe src="/psgc/vue-app/index.html" style="width:100%;height:500px;border:1px solid #ccc;border-radius:8px;"></iframe>

## Source Code

```vue
<script setup lang="ts">
import { ref, computed } from 'vue'
import { listRegions, listProvinces, listMuncities, listBarangays } from '@jobuntux/psgc'
import vueLogo from '@/assets/logo.svg'

const regions = listRegions()

const regionCode = ref('')
const provinceCode = ref('')
const munCityCode = ref('')
const barangayCode = ref('')

// provinces depend on region
const provinces = computed(() => (regionCode.value ? listProvinces(regionCode.value) : []))

// muncities depend on province
const muncities = computed(() => (provinceCode.value ? listMuncities(provinceCode.value) : []))

// detect if selected province is an HUC
const selectedProvince = computed(() =>
  provinces.value.find((p) => p.provCode === provinceCode.value),
)
const isHUC = computed(() => selectedProvince.value?.cityClass === 'HUC')

// effective muncity code (synthetic for HUCs)
const effectiveMunCityCode = computed(() =>
  isHUC.value ? muncities.value[0]?.munCityCode : munCityCode.value,
)

// barangays depend on effective muncity code
const barangays = computed(() =>
  effectiveMunCityCode.value ? listBarangays(effectiveMunCityCode.value) : [],
)

// handlers
function handleRegionChange(e: Event) {
  const value = (e.target as HTMLSelectElement).value
  regionCode.value = value
  provinceCode.value = ''
  munCityCode.value = ''
  barangayCode.value = ''
}

function handleProvinceChange(e: Event) {
  const value = (e.target as HTMLSelectElement).value
  provinceCode.value = value
  munCityCode.value = ''
  barangayCode.value = ''
}

function handleMunCityChange(e: Event) {
  const value = (e.target as HTMLSelectElement).value
  munCityCode.value = value
  barangayCode.value = ''
}

function handleBarangayChange(e: Event) {
  barangayCode.value = (e.target as HTMLSelectElement).value
}
</script>

<template>
  <div class="app">
    <!-- Header -->
    <div class="header">
      <img :src="vueLogo" alt="Vue logo" class="logo" />
    </div>

    <!-- Debug -->
    <div class="debug">
      <p>Region Code: {{ regionCode || '—' }}</p>
      <p>Province Code: {{ provinceCode || '—' }}</p>
      <p>Municipality Code: {{ munCityCode || (isHUC ? effectiveMunCityCode : '—') }}</p>
      <p>Barangay Code: {{ barangayCode || '—' }}</p>
    </div>

    <!-- Region -->
    <select :value="regionCode" @change="handleRegionChange">
      <option value="">-- Select Region --</option>
      <option v-for="reg in regions" :key="reg.regCode" :value="reg.regCode">
        {{ reg.regionName }}
      </option>
    </select>

    <!-- Province -->
    <select :value="provinceCode" @change="handleProvinceChange" :disabled="!regionCode">
      <option value="">-- Select Province --</option>
      <option v-for="prov in provinces" :key="prov.provCode" :value="prov.provCode">
        {{ prov.provName }}
      </option>
    </select>

    <!-- Municipality / City -->
    <select
      :value="munCityCode"
      @change="handleMunCityChange"
      :disabled="!provinceCode || muncities.length === 1"
    >
      <option value="">-- Select Municipality / City --</option>
      <option v-for="mun in muncities" :key="mun.munCityCode" :value="mun.munCityCode">
        {{ mun.munCityName }}
      </option>
    </select>

    <!-- Barangay -->
    <select
      :value="barangayCode"
      @change="handleBarangayChange"
      :disabled="!provinceCode || (!isHUC && !munCityCode)"
    >
      <option value="">-- Select Barangay --</option>
      <option v-for="brgy in barangays" :key="brgy.brgyCode" :value="brgy.brgyCode">
        {{ brgy.brgyOldName ? `${brgy.brgyName} (${brgy.brgyOldName})` : brgy.brgyName }}
      </option>
    </select>
  </div>
</template>
```