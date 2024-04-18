import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

const BackButton = () => {
  return (
    <Button
      asChild
      className="group px-6 shadow-[0_0_10px_-4px_rgba(0,0,0,0.4)] text-base font-light"
    >
      <Link href="/" className="font-light" scroll={false}>
        <ArrowLeftIcon className="mr-2 h-6 w-6 transition-all group-hover:-translate-x-2" />
        Back
      </Link>
    </Button>
  );
};

export default BackButton;
