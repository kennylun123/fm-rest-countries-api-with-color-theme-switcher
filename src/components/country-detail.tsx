import {
  fetchCountryDetailsByCCA3,
  getCountriesNamesByBorders,
} from "@/lib/data";
import { CountryProps, Currency, NativeName } from "@/lib/definitions";
import Image from "next/image";
import BorderButton from "./ui/border-button";

const CountryDetail = async ({ cca3 }: { cca3: string }) => {
  const {
    flags,
    name: { nativeName, common: commonName },
    tld: topLevelDomains,
    currencies,
    capital,
    region,
    subregion,
    languages,
    borders,
    population,
  }: CountryProps = await fetchCountryDetailsByCCA3(cca3);

  // Extract value of currencies into array
  const currencyNames = Object.values<Currency>(currencies).map(
    (currency) => currency.name
  );

  // Extract value of languages into array
  const languageValues = Object.values(languages);

  // Extract value of native names
  const nativeNames = Object.values<NativeName>(nativeName).map(
    (item) => item.common
  );

  // Turn border code to border name
  let borderNames = [];
  if (borders.length > 0) {
    const res = await getCountriesNamesByBorders(borders);

    // Extract the value of name.common into array
    borderNames = res.map((item) => item.name.common);
  }
  return (
    <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
      <Image
        src={flags.svg}
        alt={flags.alt}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
      />
      <div>
        <h1 className="font-extrabold text-2xl">{commonName}</h1>
        <div className="flex flex-col mt-6 gap-y-12 items-start justify-between lg:flex-row lg:mt-8">
          <div className="space-y-2">
            <div className="font-semibold">
              Native Name: <span className="font-light">{nativeNames[0]}</span>
            </div>
            <div className="font-semibold">
              Population:{" "}
              <span className="font-light">{population.toLocaleString()}</span>
            </div>
            <div className="font-semibold">
              Region: <span className="font-light">{region}</span>
            </div>
            <div className="font-semibold">
              Sub Region: <span className="font-light">{subregion}</span>
            </div>
            <div className="font-semibold">
              Captial: <span className="font-light">{capital}</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="font-semibold">
              Top Level Domain:{" "}
              <span className="font-light">{topLevelDomains}</span>
            </div>
            <div className="font-semibold">
              Currencies:{" "}
              <span className="font-light">{currencyNames.join(", ")}</span>
            </div>
            <div className="font-semibold">
              Languages:{" "}
              <span className="font-light">{languageValues.join(", ")}</span>
            </div>
          </div>
        </div>
        {borderNames.length > 0 && (
          <div className="mt-12 inline-flex flex-col gap-4">
            Border Countries:
            <div className="inline-flex flex-wrap gap-2">
              {borderNames.map((border: string, index) => (
                <BorderButton
                  key={border}
                  url={`/detail/${borders[index].toLowerCase()}`}
                  border={border}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryDetail;
