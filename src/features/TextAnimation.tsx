"use client";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

const words = `We provide the most comprehensive and well-structured notes to help you learn effectively.`;

export default function TextGenerateEffectDemo() {
  return (
    <span className="text-white">
      <TextGenerateEffect words={words} />
    </span>
  );
}
