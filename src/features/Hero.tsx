"use client"
import React from 'react'
import {Spotlight}  from "@/components/ui/spotlight-new";
import { RevealCard } from "@/features/RevealCard";
import Link from "next/link";

function Hero() {
  return (
        <div className="min-h-screen w-full pt-[72px] bg-black/[0.96] relative overflow-hidden">
              {/* Spotlight Component */}
              <Spotlight />
        
              {/* Content */}
              <div className="p-30 max-w-7xl mx-auto relative z-10 text-center w-full">
              <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                LEAD <br /> Learn Educate and Develop
              </h1>

                <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
                Access premium educational notes curated by top educators to accelerate your learning journey.
                </p>
                <RevealCard></RevealCard>
              </div>
              
            </div>
  )
}

export default Hero