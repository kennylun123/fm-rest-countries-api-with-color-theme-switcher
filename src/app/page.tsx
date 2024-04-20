import Card from "@/components/ui/card";
import Filter from "@/components/ui/filter";
import Search from "@/components/ui/search";
import { fetchCountries } from "@/lib/data";
import { CountryProps } from "@/lib/definitions";

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    country?: string;
    region?: string;
  };
}) {
  const country = searchParams?.country || "";
  const region = searchParams?.region || "";

  const countries: CountryProps[] = await fetchCountries();

  let filteredCountries: CountryProps[] = countries;

  // Filter the countries with input & region
  if (!!country && !!region) {
    filteredCountries = countries?.filter((item) => {
      return (
        item.cca3.toLowerCase().includes(country) ||
        item.name.common.toLowerCase().includes(country)
      );
    });
    filteredCountries = filteredCountries.filter(
      (item) => item.region.toLowerCase() === region
    );
  }

  // Filter the countries with input. name or cca2 code
  else if (!!country) {
    filteredCountries = countries?.filter((item) => {
      return (
        item.cca3.toLowerCase().includes(country) ||
        item.name.common.toLowerCase().includes(country)
      );
    });
  }

  // Filter the countries with selected region
  else if (!!region) {
    filteredCountries = countries?.filter(
      (item) => item.region.toLowerCase() === region
    );
  }

  // console.log(countries);
  // console.log(filteredCountries);

  return (
    <main className="min-h-[calc(100vh_-_80px)] container mx-auto px-4 py-6">
      <h1 className="sr-only">Rest Countries API Challenge</h1>
      <div className="flex flex-col lg:flex-row gap-10 items-start justify-between">
        <Search />
        <Filter />
      </div>

      {filteredCountries.length === 0 ? (
        <div className="mt-6 font-semibold text-center">
          Sorry, no matched country!
        </div>
      ) : (
        <section className="mt-6 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-16 justify-items-center">
          {filteredCountries.map((country: CountryProps) => (
            <Card key={country.name.common} {...country} />
          ))}
        </section>
      )}
    </main>
  );
}
