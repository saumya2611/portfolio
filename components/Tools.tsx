import { Compass, Github, Rocket, Code } from "lucide-react";

const tools = [
  { name: "Postman", icon: Compass, color: "#FF6C37" },
  { name: "GitHub", icon: Github, color: "#181717" },
  { name: "Vercel", icon: Rocket, color: "#000000" },
  { name: "VS Code", icon: Code, color: "#007ACC" },
];

export default function Tools() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 relative z-10">
        My Tools
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="flex items-center bg-white p-4 rounded shadow"
          >
            <tool.icon
              className="w-6 h-6 mr-2 z-10"
              style={{ color: tool.color }}
            />
            <span className="text-gray-800 z-10">{tool.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
