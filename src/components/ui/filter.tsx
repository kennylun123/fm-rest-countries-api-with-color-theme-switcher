"use client";

import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandGroup,
  CommandList,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

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

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Filter = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const setSearchParams = (selection: string) => {
    const params = new URLSearchParams(searchParams);

    if (selection) {
      params.set("region", selection);
    } else {
      params.delete("region");
    }
    replace(`${pathname}?${params.toString().toLowerCase()}`);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between w-[180px] h-14 px-6 bg-primary border-none shadow-md"
        >
          {value
            ? options.find((opt) => opt.value === value)?.label
            : "Filter by Region"}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50 dark:opacity-100" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[180px] p-0 bg-primary border-none">
        <Command>
          <CommandGroup>
            <CommandList>
              {options.map((opt) => (
                <CommandItem
                  key={opt.value}
                  className="transition-all hover:bg-black/10 dark:hover:bg-white/10"
                  value={opt.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                    setSearchParams(currentValue === value ? "" : currentValue);
                  }}
                >
                  {opt.label}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === opt.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandList>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default Filter;
