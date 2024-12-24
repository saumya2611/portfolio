"use client";

import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const stats = [
  { label: "Hours of Coding", value: 1000, max: 1100 },
  { label: "Data Structure Problems", value: 100, max: 150 },
  { label: "Commits on GitHub", value: 1050, max: 1200 },
  { label: "Hours of Soft Skills", value: 100, max: 130 },
];

export default function Statistics() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 relative z-10">
        Statistics
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white p-4 rounded shadow text-center"
          >
            <div className="w-24 h-24 mx-auto mb-2 ">
              <CircularProgressbar
                value={(stat.value / stat.max) * 100}
                text={`${stat.value}+`}
                styles={buildStyles({
                  textSize: "22px",
                  pathColor: `rgba(62, 152, 199, ${
                    (stat.value / stat.max) * 100
                  })`,
                  textColor: "#3e98c7",
                  trailColor: "#d6d6d6",
                })}
              />
            </div>
            <p className="text-gray-600 relative z-10">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
