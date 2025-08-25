# Changelog

[![!GitHub Release](https://github.com/jobuntux/psgc/actions/workflows/release.yml/badge.svg)](https://github.com/jobuntux/psgc/actions/workflows/release.yml/)

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

<!-- ## [Unreleased] -->

## [v0.1.16]: 2025-08-24

[GitHub Release v0.1.16](https://github.com/jobuntux/psgc/releases/tag/v0.1.16)

### Added
- New VitePress documentation site (in `docs/`)
- Code examples for React and Vue
- Better styling for dropdowns across frameworks

### Fixed
- Improved indexing performance for barangay lookups
- Refactored helper functions with JSDoc comments

## [v0.1.15]: 2025-08-23

[GitHub Release v0.1.15](https://github.com/jobuntux/psgc/releases/tag/v0.1.15)

### Added
- Initial publish to npm
- Functions:
  - `listRegions`
  - `listProvinces`
  - `listMuncities`
  - `listBarangays`

### Fixed
- Release workflow bug (GitHub Action failing on missing tag)
- Package.json metadata cleanup
