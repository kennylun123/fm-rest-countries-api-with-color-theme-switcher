"use client";

import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const options = [
  {
    value: "africa",
    label: "Africa",
  },
  {
    value: "americas",
    label: "Americas",
  },
  {
    value: "asia",
    label: "Asia",
  },
  {
    value: "europe",
    label: "Europe",
  },
  {
    value: "oceania",
    label: "Oceania",
  },
];
const Filter = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const regionParam = searchParams.get("region")?.toString() || "";

  const setSearchParams = (selection: string) => {
    const params = new URLSearchParams(searchParams);

    if (selection === regionParam) {
      params.delete("region");
    } else {
      params.set("region", selection);
    }
    replace(`${pathname}?${params.toString().toLowerCase()}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="min-w-[11.25rem] h-14 px-6 bg-primary border-none shadow-md justify-between gap-2">
          {regionParam
            ? options.find((opt) => opt.value === regionParam)?.label
            : "Filter by Region"}
          <ChevronDown className="h-4 w-4 " />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-[11.25rem] bg-primary border-none">
        <DropdownMenuRadioGroup
          value={regionParam}
          onValueChange={(value) => setSearchParams(value)}
        >
          {options.map((opt) => (
            <DropdownMenuRadioItem
              key={opt.value}
              className="transition-all hover:bg-black/10 focus:bg-black/10 dark:hover:bg-white/10 dark:focus:bg-white/10"
              value={opt.value}
            >
              {opt.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Filter;
