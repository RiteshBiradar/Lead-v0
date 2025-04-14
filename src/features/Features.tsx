"use client"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { HoverEffect } from "../components/ui/card-hover-effect";

export function Features() {
  return (
    <div style={{ backgroundColor: "#0a0a0a" }} className="pt-10 pb-24.5">
    <h3 className="text-white text-4xl font-bold mb-4 text-center tracking-tight drop-shadow-md pt-5">
  Why Choose Lead Notes?
</h3>
<TextGenerateEffect
  words="We provide the most comprehensive and well-structured notes to help you learn effectively."
  className="text-center text-gray-300 text-xl"
  
/>


    <div className="max-w-7xl mx-auto px-8 ">
      <HoverEffect items={projects} />
    </div>
    </div>
  );
}
export const projects = [
  {
    title: "Expert-Curated Content",
    description:
      "Our notes are created and reviewed by subject matter experts with years of teaching experience.",
  },
  {
    title: "Mobile Friendly",
    description:
      "Access your notes anytime, anywhere with our responsive design that works perfectly on all devices.",

  },
  {
    title: "Progress Tracking",
    description:
      "Monitor your learning progress with our built-in analytics and personalized recommendations.",

  },
  {
    title: "Comprehensive Coverage",
    description:
      "From basic concepts to advanced topics, we've got all your learning needs covered.",

  },
  {
    title: "Downloadable PDFs",
    description:
      "Download notes in PDF format for offline access and printing.",

  },
  {
    title: "Community Support",
    description:
      "Join our community of learners to discuss concepts, ask questions, and share knowledge.",
  },
];
