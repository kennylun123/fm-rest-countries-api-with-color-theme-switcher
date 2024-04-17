import React from "react";
import Link from "next/link";
import { ModeToggle } from "./ui/mode-toggle";

const PageHeader = () => {
  return (
    <header className="sticky top-0 w-full bg-primary shadow-sm z-50">
      <div className="container mx-auto h-20 flex items-center justify-between px-4">
        <Link
          href="/"
          className="font-extrabold text-sm lg:text-xl"
          aria-label="Home page"
        >
          Where in the world?
        </Link>
        <ModeToggle />
      </div>
    </header>
  );
};

export default PageHeader;
