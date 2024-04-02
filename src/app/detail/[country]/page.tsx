import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { fetchCountryDetailsByName } from "@/lib/data";
import { CountryProps, Currency, NativeName } from "@/lib/definitions";

export const metadata: Metadata = {
  title: "Detail page",
};

export default async function Page({
  params,
}: {
  params: { country: string };
}) {
  const [country]: [CountryProps] = await fetchCountryDetailsByName(
    params.country
  );
  // console.log(country);

  // Extract names of currencies into an array
  const currencyNames = Object.values<Currency>(country.currencies).map(
    (currency) => currency.name
  );

  // Extract languages into an array
  const languages = Object.values(country.languages);

  // Extract native name
  const nativeName = Object.values<NativeName>(country.name.nativeName).map(
    (item) => item.common
  );

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-8 py-10">
        <Button
          asChild
          className="group px-6 shadow-[0_0_10px_-4px_rgba(0,0,0,0.4)] text-base font-light"
        >
          <Link href="/" className="font-light">
            <ArrowLeftIcon className="mr-2 h-6 w-6 transition-all group-hover:-translate-x-2" />
            Back
          </Link>
        </Button>
        <div className="mt-16 grid grid-flow-row gap-12">
          <Image
            src={country.flags.svg}
            alt={country.flags.alt}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto max-w-[32rem] max-h-[19.2rem] object-cover"
          />
          <div>
            <h1 className="font-extrabold text-2xl">{country.name.common}</h1>
            <div className="flex flex-col mt-6 gap-y-8 items-start">
              <div className="space-y-2">
                <div className="font-semibold">
                  Native Name:{" "}
                  <span className="font-light">{nativeName.join(", ")}</span>
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
            {country.borders.length > 0 && (
              <div className="mt-8 inline-flex flex-col gap-4">
                Border Countries:
                <div className="inline-flex flex-wrap gap-2">
                  {country.borders.map((border: string) => (
                    <Button
                      key={border}
                      asChild
                      className="px-6 shadow-[0_0_10px_-4px_rgba(0,0,0,0.4)] text-base font-light"
                    >
                      <Link href={`/`}>{border}</Link>
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
