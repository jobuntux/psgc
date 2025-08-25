# Vue Example

Here’s the Vue cascading dropdown in action:

<iframe src="/psgc/vue-app/index.html" style="width:100%;height:500px;border:1px solid #ccc;border-radius:8px;"></iframe>

## Source Code

```vue
<script setup lang="ts">
import { ref, computed } from 'vue'
import { listProvinces, listMuncities, listBarangays } from '@jobuntux/psgc'

// logo import (place vue.svg inside src/assets/)
import vueLogo from '@/assets/logo.svg'

const provinces = listProvinces()

const provinceCode = ref('')
const munCityCode = ref('')
const barangayCode = ref('')

// muncities depend on provinceCode
const muncities = computed(() => (provinceCode.value ? listMuncities(provinceCode.value) : []))

// barangays depend on munCityCode
const barangays = computed(() => (munCityCode.value ? listBarangays(munCityCode.value) : []))

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
    <!-- Vue heading -->
    <div class="header">
      <img :src="vueLogo" alt="Vue logo" class="logo" />
    </div>

    <!-- Province dropdown -->
    <select :value="provinceCode" @change="handleProvinceChange">
      <option value="">-- Select Province --</option>
      <option v-for="prov in provinces" :key="prov.provCode" :value="prov.provCode">
        {{ prov.provName }}
      </option>
    </select>

    <!-- Muncity dropdown (only if province selected) -->
    <select v-if="provinceCode" :value="munCityCode" @change="handleMunCityChange">
      <option value="">-- Select Municipality / City --</option>
      <option v-for="mun in muncities" :key="mun.munCityCode" :value="mun.munCityCode">
        {{ mun.munCityName }}
      </option>
    </select>

    <!-- Barangay dropdown (only if muncity selected) -->
    <select v-if="munCityCode" :value="barangayCode" @change="handleBarangayChange">
      <option value="">-- Select Barangay --</option>
      <option v-for="brgy in barangays" :key="brgy.brgyCode" :value="brgy.brgyCode">
        {{ brgy.brgyOldName ? `${brgy.brgyName} (${brgy.brgyOldName})` : brgy.brgyName }}
      </option>
    </select>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin: 2rem auto;
  font-family: system-ui, sans-serif;

  /* ✅ Fit content instead of forcing full viewport */
  height: auto;
  min-height: auto;
}

/* Header with logo + title */
.header {
  text-align: center;
  margin-bottom: 1rem;
}
.logo {
  width: 60px;
  height: 60px;
  margin-bottom: 0.5rem;
}
h2 {
  color: #42b883; /* Vue green */
}

select {
  padding: 0.6rem 1rem;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  background: white;
  cursor: pointer;
  transition: all 0.2s ease;
}

select:hover {
  border-color: #42b883;
  box-shadow: 0 0 0 3px rgba(66, 184, 131, 0.15);
}

select:focus {
  outline: none;
  border-color: #42b883;
  box-shadow: 0 0 0 3px rgba(66, 184, 131, 0.25);
}
</style>

```