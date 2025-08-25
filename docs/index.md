---
title: Home
---

# @jobuntux/psgc

Philippine Standard Geographic Code (PSGC) for JavaScript and TypeScript projects.
Easily query regions, provinces, municipalities, and barangays with clean utilities and structured data.


<div style="display:flex; flex-wrap:wrap; gap:12px;">
  <!-- 📦 Package -->
  <a href="https://www.npmjs.com/package/@jobuntux/psgc" target="_blank">
    <img src="https://img.shields.io/npm/v/@jobuntux/psgc" alt="npm">
  </a>
  <a href="https://github.com/jobuntux/psgc/blob/main/LICENSE" target="_blank">
    <img src="https://img.shields.io/npm/l/@jobuntux/psgc" alt="license">
  </a>
  <img src="https://img.shields.io/npm/dm/@jobuntux/psgc" alt="npm downloads">
  <!-- 📂 Repository -->
  <a href="https://github.com/jobuntux/psgc/commits/main" target="_blank">
    <img src="https://img.shields.io/github/last-commit/jobuntux/psgc" alt="Last commit">
  </a>
  <a href="https://github.com/jobuntux/psgc/issues" target="_blank">
    <img src="https://img.shields.io/github/issues/jobuntux/psgc" alt="GitHub issues">
  </a>
  <a href="https://github.com/jobuntux/psgc/stargazers" target="_blank">
    <img src="https://img.shields.io/github/stars/jobuntux/psgc?style=social" alt="GitHub Repo stars">
  </a>
  <!-- ✅ Quality -->
  <a href="https://snyk.io/test/github/jobuntux/psgc" target="_blank">
    <img src="https://snyk.io/test/github/jobuntux/psgc/badge.svg" alt="Known Vulnerabilities">
  </a>
  <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg" alt="code style: prettier">
  <img src="https://img.shields.io/badge/language-Typescript-blue" alt="TypeScript">
</div>

## Installation

```bash
npm install @jobuntux/psgc
```

or

```bash
yarn add @jobuntux/psgc
```

## Quick Example

```ts
import { listRegions, listProvinces, listMuncities, listBarangays } from '@jobuntux/psgc'

// list all regions
console.log(listRegions())

// list provinces in Region III (Central Luzon)
console.log(listProvinces('03'))

// list municipalities in Bulacan
console.log(listMuncities('0314'))

// list barangays in Malolos City
console.log(listBarangays('031410'))
```

## Documentation

* [Important Notes](/dev/notes)
* [Guide → Installation](/guide/installation)
* [Guide → Usage](/guide/usage)
* [Examples → React](/examples/react)
* [Examples → Vue](/examples/vue)
* [Changelog](/dev/changelog)
* [FAQ](/guide/faq)

## Features

* 🌏 Complete PSGC dataset (regions, provinces, municipalities, barangays)
* ⚡ Fast lookups with prebuilt JSON
* 📦 Lightweight and tree-shakable
* 🧪 Tested utilities with predictable outputs
* 🛠 Works in Node.js, browser, and modern frameworks

## FAQ

See FAQs [here](/guide/faq)

## Contributing

* [Contribute here](/dev/contributing)
