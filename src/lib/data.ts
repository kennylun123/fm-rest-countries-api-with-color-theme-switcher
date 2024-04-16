"use server";

import { error } from "console";
import { unstable_noStore as noStore } from "next/cache";

export async function fetchCountries() {
  try {
    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,cca3"
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

export async function fetchCountryDetailsByName(name: string) {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${name}?fields=name,flags,population,region,capital,nativeName,subregion,tld,currencies,languages,borders`
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

export async function fetchCountryNameByCCA3(code: string) {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/alpha/${code}?fields=name`
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

export async function getCountriesNamesByBorders(borders: string[]) {
  try {
    const response = await Promise.all(
      borders.map((border) => fetchCountryNameByCCA3(border))
    );

    return response;
  } catch (error) {
    console.error("Fetching Error:", error);
    throw new Error("Failed to fetch countries names.");
  }
}
