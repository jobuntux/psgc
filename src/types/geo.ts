export type Region = {
  psgcCode: string;
  regCode: string;
  regionName: string;
};

export type Province = {
  psgcCode: string;
  regCode: string;
  provCode?: string;
  provName: string;
};

export type MunCity = {
  psgcCode: string;
  regCode: string;
  provCode: string;
  munCityCode: string;
  munCityName: string;
  munCityOldName?: string;
};

export type Barangay = {
  psgcCode: string;
  regCode: string;
  provCode: string;
  munCityCode: string;
  brgyCode: string;
  brgyName: string;
  brgyOldName?: string;
};
