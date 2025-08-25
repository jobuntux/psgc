export type TGeoLevel = "Bgy" | "City" | "Mun" | "Prov" | "Reg" | "SubMun";

export type TCityClass = "HUC" | "CC" | "ICC";

export type TRegion = {
  psgcCode: string;
  regCode: string;
  regionName: string;
};

export type TProvince = {
  psgcCode: string;
  regCode: string;
  provCode?: string;
  provName: string;
  provOldName?: string;
  cityClass?: TCityClass;
  munCityCode?: string;
};

export type TMunCity = {
  psgcCode: string;
  regCode: string;
  provCode: string;
  munCityCode: string;
  munCityName: string;
  munCityOldName?: string;
};

export type TBarangay = {
  psgcCode: string;
  regCode: string;
  provCode: string;
  munCityCode: string;
  brgyCode: string;
  brgyName: string;
  brgyOldName?: string;
};
