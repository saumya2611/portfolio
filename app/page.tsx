"use client";
import About from "@/components/About";
import GitHubGraph from "@/components/GitHubGraph";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Statistics from "@/components/Statistics";
import Tools from "@/components/Tools";
import { useEffect } from "react";
// import "./globals.css";

export default function Home() {
  useEffect(() => {
    const cursor: HTMLDivElement | null = document.querySelector(".cursor");
    document.addEventListener("mousemove", (e) => {
      cursor?.setAttribute(
        "style",
        "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
      );
    });
  }, []);
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="cursor"></div>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <About />
        <Skills />
        <Tools />
        <Projects />
        <Statistics />
        <GitHubGraph />
      </div>
    </main>
  );
}
