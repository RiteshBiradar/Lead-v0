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
      title: "BEEE",
      description: "They told us to 'build circuits' in BEEE, but we’re still trying to build confidence",
      image: "/gifs/circuit-board.gif",
      href: "/downloads/beee.pdf",
    },
    {
      title: "Chemistry",
      description: "Are you made of copper and tellurium? Because you’re Cu-Te.",
      image: "/gifs/test-tube.gif",
      href: "/downloads/chemistry.pdf",
    },
    {
      title: "Physics",
      description: "First-year physics lab: Copy readings, act like I got them.",
      image: "/gifs/physics.gif",
      href: "/downloads/physics.pdf",
    },
    {
      title: "IOT",
      description: "IoT devices are like my family, always connected but never listening..",
      image: "/gifs/robot.gif",
      href: "/downloads/iot.pdf",
    },
    {
      title: "Nmit",
      description: "Dear Math, I’m not a therapist. Solve your own problems.",
      image: "/gifs/math.gif",
      href: "/downloads/nmit.pdf",
    },
    {
      title: "LA&C",
      description: "Don't differentiate—let's integrate, so we can add up to something great",
      image: "/gifs/maths.gif",
      href: "/downloads/lac.pdf",
    },
    {
      title: "EDA",
      description: "We learned about current flow… but my understanding never really charged up.",
      image: "/gifs/eda.gif",
      href: "/downloads/eda.pdf",
    },
    {
      title: "PPS",
      description: "Hello, World!’ in C. After that, nothing felt that simple again",
      image: "/gifs/pps.gif",
      href: "/downloads/pps.pdf",
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
