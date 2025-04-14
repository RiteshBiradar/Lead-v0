"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../components/ui/text-reveal-card";

export function RevealCard() {
  return (
    <div className="flex items-center justify-center bg-[#0E0E10] rounded-2xl mt-10">
      <TextRevealCard
        text="Exams are near but can't find your notes?"
        revealText="Don't worry, LEAD got you covered!"
      >
        <TextRevealCardTitle>
          Sometimes, you just need to see it. (Hover to reveal)
        </TextRevealCardTitle>
      </TextRevealCard>
    </div>
  );
}
