"use client";
import React from "react";
import Hero from "@/features/Hero";
import Navbar from "@/features/Navbar";
import { Features } from "@/features/Features";
import Notes from "@/features/Notes";
import  {Testimonials}  from "@/features/Testimonials";

export default function App() {
  return (
    <div className="overflow-x-hidden">
    <Navbar></Navbar>
    <Hero></Hero>
    <Features></Features>
    <Notes></Notes>
    <Testimonials></Testimonials>
    </div>
);
}
