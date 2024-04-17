export type CountryProps = {
  flags: {
    png: string;
    svg: string;
    alt: string;
  };

  name: {
    common: string;
    nativeName: {};
  };
  tld: string[];
  currencies: {};
  capital: string[];
  region: string;
  subregion: string;
  languages: {};
  borders: string[];
  population: number;
  cca3: string;
};

export type Currency = {
  name: string;
  // symbol: string;
};

export type NativeName = {
  common: string;
};

export type BorderButtonProps = {
  url: string;
  border: string;
};
