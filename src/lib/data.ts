"use server";

import { unstable_noStore as noStore } from "next/cache";

export async function fetchCountries() {
  try {
    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital"
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return await response.json();
  } catch (error) {
    console.error("Fetching Error:", error);
    throw new Error("Failed to fetch countries.");
  }
}

// TBC:
// 1. Only can use one query, name or region: OK
// 2. Clear the searchParams when navigate back to homepage? Will cause value state lost?
export async function fetchCountriesByRegion(region: string) {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/region/${region}?fields=name,flags,population,region,capital`
    );

    if (!response.ok) {
      return { status: response.status };
    }

    return await response.json();
  } catch (error) {
    console.error("Fetching Error:", error);
    throw new Error("Failed to fetch countries.");
  }
}

export async function fetchCountriesByName(name: string) {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${name}?fields=name,flags,population,region,capital`
    );

    if (!response.ok) {
      return { status: response.status };
    }

    return await response.json();
  } catch (error) {
    console.error("Fetching Error:", error);
    throw new Error("Failed to fetch countries.");
  }
}
