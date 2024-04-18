import { Metadata } from "next";
import { Suspense } from "react";
import { DetailSkeleton } from "@/components/ui/skeletons";
import BackButton from "@/components/ui/back-button";
import CountryDetail from "@/components/country-detail";

export const metadata: Metadata = {
  title: "Detail page",
};

export default async function Page({
  params: { country: cca3 },
}: {
  params: { country: string };
}) {
  return (
    <main className="min-h-[calc(100vh_-_80px)] container mx-auto px-8 py-10 lg:px-4">
      <BackButton />
      <Suspense fallback={<DetailSkeleton />}>
        <CountryDetail cca3={cca3} />
      </Suspense>
    </main>
  );
}
