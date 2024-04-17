import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  fetchCountryDetailsByCCA3,
  getCountriesNamesByBorders,
} from "@/lib/data";
import { CountryProps, Currency, NativeName } from "@/lib/definitions";
import BackButton from "@/components/ui/back-button";
import BorderButton from "@/components/ui/border-button";

export const metadata: Metadata = {
  title: "Detail page",
};

export default async function Page({
  params: { country: cca3 },
}: {
  params: { country: string };
}) {
  const country: CountryProps = await fetchCountryDetailsByCCA3(cca3);

  // console.log(country);

  // Extract value of currencies into array
  const currencyNames = Object.values<Currency>(country.currencies).map(
    (currency) => currency.name
  );

  // Extract value of languages into array
  const languages = Object.values(country.languages);

  // Extract native names
  const nativeNames = Object.values<NativeName>(country.name.nativeName).map(
    (item) => item.common
  );

  // Turn border code to border name
  let borderNames = [];
  if (country.borders.length > 0) {
    const res = await getCountriesNamesByBorders(country.borders);

    // Extract the value of name.common into array
    borderNames = res.map((item) => item.name.common);
  }

  return (
    <main className="min-h-screen container mx-auto px-8 py-10 lg:px-4">
      <BackButton />
      <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
        <Image
          src={country.flags.svg}
          alt={country.flags.alt}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
        />
        <div className="">
          <h1 className="font-extrabold text-2xl">{country.name.common}</h1>
          <div className="flex flex-col mt-6 gap-y-12 items-start justify-between lg:flex-row lg:mt-8">
            <div className="space-y-2">
              <div className="font-semibold">
                Native Name:{" "}
                <span className="font-light">{nativeNames[0]}</span>
              </div>
              <div className="font-semibold">
                Population:{" "}
                <span className="font-light">
                  {country.population.toLocaleString()}
                </span>
              </div>
              <div className="font-semibold">
                Region: <span className="font-light">{country.region}</span>
              </div>
              <div className="font-semibold">
                Sub Region:{" "}
                <span className="font-light">{country.subregion}</span>
              </div>
              <div className="font-semibold">
                Captial: <span className="font-light">{country.capital}</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-semibold">
                Top Level Domain:{" "}
                <span className="font-light">{country.tld}</span>
              </div>
              <div className="font-semibold">
                Currencies:{" "}
                <span className="font-light">{currencyNames.join(", ")}</span>
              </div>
              <div className="font-semibold">
                Languages:{" "}
                <span className="font-light">{languages.join(", ")}</span>
              </div>
            </div>
          </div>
          {borderNames.length > 0 && (
            <div className="mt-12 inline-flex flex-col gap-4">
              Border Countries:
              <div className="inline-flex flex-wrap gap-2">
                {borderNames.map((border: string, index) => (
                  <BorderButton
                    url={`/detail/${country.borders[index].toLowerCase()}`}
                    border={border}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
