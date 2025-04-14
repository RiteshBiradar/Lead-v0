"use client";
import { cn } from "@/lib/util";
import Link from "next/link";

function CardDemo({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div className="max-w-xs w-full group/card bg-[#0a0a0a]">
      <div
        className={cn(
          "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4"
        )}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10"></div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">{title}</h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function CardsRow() {
  const cards = [
    {
      title: "1st Year",
      description: "From 'What is engineering?' to 'Did we even study this?' the journey begins here.",
      image: "/images/first-year.jpg",
      href: "/notes/first-year",
    },
    {
      title: "2nd Year",
      description: "Still figuring it out, but hey, at least now we know what a CGPA is.",
      image: "/images/second-year.jpg",
      href: "/notes/second-year",
    },
    {
      title: "3rd Year",
      description: "Internships, projects, and that one course you wish you never took.",
      image: "/images/third-year.jpg",
      href: "/notes/3rd-year",
    },
    {
      title: "Final Year",
      description: "Now we Google everything and pray the placements go well.",
      image: "/images/fourth-year.jpg",
      href: "/notes/final-year",
    },
  ];

  return (
    <div className="bg-[#0a0a0a] pt-20 pb-30">
      <h1 className="text-white font-bold text-3xl text-center p-7">
        Get your notes here!
      </h1>
      <div className="flex flex-wrap gap-6 justify-center p-6">
        {cards.map((card, index) => (
          <Link href={card.href} key={index}>
            <CardDemo
              title={card.title}
              description={card.description}
              image={card.image}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
