export type CountryProps = {
  flags: {
    png: string;
    svg: string;
    alt: string;
  };

  name: {
    common: string;
  };
  capital: string[];
  region: string;
  population: number;
};
