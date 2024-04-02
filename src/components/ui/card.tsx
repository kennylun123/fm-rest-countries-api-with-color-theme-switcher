import Image from "next/image";
import Link from "next/link";
import { CountryProps } from "@/lib/definitions";

const Card = ({
  flags,
  name: { common: name },
  population,
  region,
  capital,
}: CountryProps) => {
  return (
    <Link
      href={`/detail/${name}`}
      className="w-[262px] h-[336px] rounded-md shadow-md bg-primary overflow-hidden transition-all hover:scale-105"
    >
      <div className="relative w-full h-[160px]">
        <Image
          src={flags.svg}
          alt={flags.alt}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="w-full p-6">
        <h2 className="font-extrabold text-lg leading-6">{name}</h2>
        <p className="mt-4 font-semibold text-sm">
          Poplulation:{" "}
          <span className="font-light">{population.toLocaleString()}</span>
        </p>
        <p className="mt-1 font-semibold text-sm">
          Region: <span className="font-light">{region}</span>
        </p>
        <p className="mt-1 font-semibold text-sm">
          Capital: <span className="font-light">{capital}</span>
        </p>
      </div>
    </Link>
  );
};

export default Card;
