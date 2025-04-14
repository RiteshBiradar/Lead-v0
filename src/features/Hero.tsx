"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";
import { RevealCard } from "@/features/RevealCard";
import Link from "next/link";

function Hero() {
  return (
    <div className="min-h-screen w-full pt-[132px] bg-black/[0.96] relative overflow-hidden">
      {/* Spotlight Component */}
      <Spotlight />

      {/* Content */}
      <div className="px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 max-w-7xl mx-auto relative z-10 text-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          LEAD <br /> Learn Educate and Develop
        </h1>

        <p className="mt-4 font-normal text-sm sm:text-base md:text-lg text-neutral-300 max-w-md sm:max-w-lg md:max-w-xl mx-auto">
          Access premium educational notes curated by top educators to accelerate your learning journey.
        </p>

        <div className="mt-6 sm:mt-8">
          <RevealCard />
        </div>
      </div>
    </div>
  );
}

export default Hero;
