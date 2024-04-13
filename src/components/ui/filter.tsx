"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Filter = ({ placeholder }: { placeholder: string }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSelect = (selection: string) => {
    const params = new URLSearchParams(searchParams);

    if (selection) {
      params.set("region", selection);
    } else {
      params.delete("region");
    }
    replace(`${pathname}?${params.toString().toLowerCase()}`);
  };

  const regions = [
    {
      key: 0,
      title: "Africa",
    },
    {
      key: 1,
      title: "Americas",
    },
    {
      key: 2,
      title: "Asia",
    },
    {
      key: 3,
      title: "Europe",
    },
    {
      key: 4,
      title: "Oceania",
    },
  ];
  return (
    <Select
      onValueChange={(value) => handleSelect(value)}
      defaultValue={searchParams.get("region")?.toString()}
    >
      <SelectTrigger className="w-[180px] h-14 px-6 bg-primary border-none shadow-md">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="bg-primary border-none">
        {regions.map(({ key, title }) => (
          <SelectItem
            key={key}
            className="transition-all hover:bg-black/10 dark:hover:bg-white/10"
            value={title}
          >
            {title}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default Filter;
