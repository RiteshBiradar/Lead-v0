"use client";

import React from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

export function Testimonials() {
  return (
    <div className="min-h-screen flex flex-col antialiased bg-[#0a0a0a] dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center px-4">
      {/* Heading */}
      <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 font-extrabold text-4xl sm:text-5xl animate-pulse mt-10 text-center">
        Testimonials
      </h2>
      <h3 className="text-gray-300 font-semibold text-xl sm:text-2xl mb-3 tracking-wide text-center">
        Here's what students say about us
      </h3>

      {/* Cards */}
      <div className="w-full max-w-6xl h-[30rem] flex flex-col items-center justify-center relative overflow-hidden px-2 sm:px-6">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>

      {/* Footer */}
      <div className="text-center mt-4 mb-6 px-4">
        <p className="text-gray-300 text-base sm:text-lg font-medium leading-relaxed">
          Feel free to reach out on Instagram <span className="font-bold">_riteshbiradar_</span> or LinkedIn <span className="font-bold">Ritesh Biradar</span> for providing a review or if you have notes we can add to the website.
        </p>
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "I was struggling with my studies and couldn't find proper notes anywhere. But this site helped me a lot. The notes are simple, easy to understand, and really useful for exams. I can’t thank you enough!",
    name: "Priya Sharma",
  },
  {
    quote:
      "I always had trouble understanding some topics, but these notes made it so much easier. I feel more confident about my exams now. Best part is that they cover all topics in simple language.",
    name: "Rohit Kumar",
  },
  {
    quote:
      "I had no idea where to find good study material. A friend recommended this website, and it helped me a lot. The notes are clear, and I feel more prepared for my exams now.",
    name: "Anjali Gupta",
  },
  {
    quote:
      "These notes saved me during my last-minute preparation. They're easy to read and have everything I need. It’s a lifesaver for students like me who struggle with regular classes",
    name: "Aarav Reddy",
  },
  {
    quote:
      "Bro I got to know about your website its very useful. I have lost my pps notes but as I have your website I can study confidently, I hope you add remaining notes very soon",
    name: "Uday Teja",
  },
];
