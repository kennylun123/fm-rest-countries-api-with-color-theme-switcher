"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="p-0">
          <SunIcon className="h-[1.2rem] w-[1.2rem] mr-2 dark:hidden" />
          <span className="dark:hidden">Light Mode</span>
          <MoonIcon className="h-[1.2rem] w-[1.2rem] mr-2 hidden dark:block" />
          <span className="hidden dark:inline">Dark Mode</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-primary border-none" align="end">
        <DropdownMenuItem
          className="hover:bg-black/10 focus:bg-black/10 dark:hover:bg-white/10 dark:focus:bg-white/10"
          onClick={() => setTheme("light")}
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          className="hover:bg-black/10 focus:bg-black/10 dark:hover:bg-white/10 dark:focus:bg-white/10"
          onClick={() => setTheme("dark")}
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          className="hover:bg-black/10 focus:bg-black/10 dark:hover:bg-white/10 dark:focus:bg-white/10"
          onClick={() => setTheme("system")}
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
