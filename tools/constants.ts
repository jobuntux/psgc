/**DOCU:
 * - Official Data
 */
export const geo = {
  // REGIONS
  regions: {
    total: 18,
  },

  // PROVINCES
  provinces: {
    total: 82,
  },

  // CITIES
  cities: {
    total: 149,
    huc: 33,
    cc: 111,
    icc: 5,
    blanks: 43_620,
  },

  // MUNICIPALITIES
  municipalities: {
    total: 1_493,
    sub: 14,
  },

  // BARANGAYS
  barangays: {
    total: 42_011,
  },

  // BLANKS
  blanks: {
    total: 2,
  },
};

const { regions, provinces, cities, municipalities, barangays } = geo;
/**DOCU:
 * - Derived Data
 */
export const totalRegionsCount = regions.total;

export const provinceAndHUCCount = provinces.total + cities.huc;

export const munCitiesCount =
  municipalities.total + municipalities.sub + cities.cc + cities.icc + cities.huc;

export const totalBrgyCount = barangays.total;
