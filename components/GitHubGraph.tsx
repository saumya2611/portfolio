"use client";

import GitHubCalendar from "react-github-calendar";
import "./style.css";

export default function GitHubGraph() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 relative z-10">
        GitHub Contributions
      </h2>
      <GitHubCalendar colorScheme="light" username="saumya2611" />
    </section>
  );
}
