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
          "cursor-pointer overflow-hidden relative card h-76 rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4"
        )}
        style={{
          //backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
                <div className="relative w-full h-32 flex justify-center items-start">
          <img
            src={image}
            alt={title}
            className="w-40 h-40 "
          />
        </div>
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10"></div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-white relative z-10">{title}</h1>
          <p className="text-sm text-white rounded-lg shadow-lg relative z-10 my-4">
  {description}
</p>

        </div>
      </div>
    </div>
  );
}

export default function CardsRow() {
  const cards = [
    {
      title: "Deco",
      description: "I understand JK flip-flops, but not JK why I took this subject.",
      image: "/gifs/deco.gif",
      href: "/downloads/deco.pdf",
    },
    {
      title: "Java",
      description: "Tried to inherit some motivation, but Java doesn’t support that.",
      image: "/gifs/java.gif",
      href: "/downloads/java.pdf",
    },
    {
      title: "Data Structures",
      description: "Stack Overflow: The real teacher behind every engineering degree.",
      image: "/gifs/idea.gif",
      href: "/downloads/ds.pdf",
    },
    {
      title: "COSM",
      description: "Passed by luck in a subject about luck.",
      image: "/gifs/dollar.gif",
      href: "/downloads/cosm.pdf",
    },
    {
      title: "DM",
      description: "Graphs in DM makes more connections, than I do in college.",
      image: "/gifs/dm.gif",
      href: "/downloads/dm.pdf",
    },
    {
      title: "DBMS",
      description: "SELECT * FROM life WHERE problems = 'none' - 0 rows returned",
      image: "/gifs/database.gif",
      href: "/downloads/dbms.pdf",
    },
    {
      title: "Software Engineering",
      description: "We wrote 100 pages of documentation… for a ‘Hello World’ app.",
      image: "/gifs/se.gif",
      href: "/downloads/se.pdf",
    },
    {
      title: "Thermod Dynamics",
      description: "First law of thermodynamics: Energy can't be created or destroyed... just like my motivation.",
      image: "/gifs/td.gif",
      href: "/downloads/td.pdf",
    },
  ];

  return (
    <div className="bg-[#0a0a0a]">
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
