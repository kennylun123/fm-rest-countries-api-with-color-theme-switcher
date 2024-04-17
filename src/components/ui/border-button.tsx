import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BorderButtonProps } from "@/lib/definitions";

const BorderButton = ({ url, border }: BorderButtonProps) => {
  return (
    <Button
      asChild
      className="px-6 shadow-[0_0_10px_-4px_rgba(0,0,0,0.4)] text-base font-light"
    >
      <Link href={url}>{border}</Link>
    </Button>
  );
};

export default BorderButton;
