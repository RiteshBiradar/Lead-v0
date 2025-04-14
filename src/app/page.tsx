"use client";
import React from "react";
import Link from "next/link";
import Hero from "@/features/Hero";
import { RevealCard } from "@/features/RevealCard";
import Navbar from "@/features/Navbar";
import { Features } from "@/features/Features";
import Notes from "@/features/Notes";
import  {Testimonials}  from "@/features/Testimonials";

export default function App() {
  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <Features></Features>
    <Notes></Notes>
    <Testimonials></Testimonials>
    </>
);
}
