import Card from "@/components/ui/card";
import Filter from "@/components/ui/filter";
import Search from "@/components/ui/search";
import {
  fetchCountries,
  fetchCountriesByName,
  fetchCountriesByRegion,
} from "@/lib/data";
import { CountryProps } from "@/lib/definitions";

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    name?: string;
    region?: string;
  };
}) {
  const name = searchParams?.name || "";
  const region = searchParams?.region || "";

  const countries =
    (name && (await fetchCountriesByName(name))) ||
    (region && (await fetchCountriesByRegion(region))) ||
    (await fetchCountries());

  return (
    <main className="min-h-screen container mx-auto px-4 py-6">
      <h1 className="sr-only">Rest Countries API Challenge</h1>
      <div className="flex flex-col lg:flex-row gap-10 items-start justify-between">
        <Search placeholder="Search for a country..." />
        <Filter placeholder="Filter by Region" />
      </div>

      {countries.status === 404 ? (
        <div className="mt-6 font-semibold text-center">
          Sorry, no matched country!
        </div>
      ) : (
        <section className="mt-6 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-16 justify-items-center">
          {countries.map((country: CountryProps) => (
            <Card key={country.name.common} {...country} />
          ))}
        </section>
      )}
    </main>
  );
}
