"use client";

import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // Debouncing, execute below code when user finish typing after 300ms.
  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("country", term);
    } else {
      params.delete("country");
    }
    replace(`${pathname}?${params.toString().toLowerCase()}`);
  }, 300);

  return (
    <div className="relative w-full lg:max-w-[28.5rem]">
      <Input
        id="search"
        className="h-14 pl-16 py-6 text-xs border-none shadow-md bg-primary placeholder:text-black/30 dark:placeholder:text-white"
        placeholder={"Search for a country..."}
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("country")?.toString() || ""}
      />
      <MagnifyingGlassIcon className="absolute left-6 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-black/30 dark:text-white" />
    </div>
  );
};

export default Search;
