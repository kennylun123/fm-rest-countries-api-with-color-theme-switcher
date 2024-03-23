import React from "react";
import Link from "next/link";
import { ModeToggle } from "./ui/mode-toggle";

const PageHeader = () => {
  return (
    <header className="w-full bg-primary shadow-sm">
      <div className="container mx-auto h-20 flex items-center justify-between px-4">
        <Link href="/" className="font-extrabold text-sm lg:text-xl">
          Where in the world?
        </Link>
        <ModeToggle />
      </div>
    </header>
  );
};

export default PageHeader;
