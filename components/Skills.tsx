import { Code, FileJson, Palette, Layers, Box } from "lucide-react";

const skills = [
  { name: "HTML5", icon: Code, color: "#E34F26" },
  { name: "CSS3", icon: Palette, color: "#1572B6" },
  { name: "JavaScript", icon: FileJson, color: "#F7DF1E" },
  { name: "ReactJS", icon: Layers, color: "#61DAFB" },
  { name: "ReduxJS", icon: Box, color: "#764ABC" },
  { name: "Tailwind CSS", icon: Palette, color: "#06B6D4" },
  { name: "Bootstrap", icon: Palette, color: "#7952B3" },
];

export default function Skills() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 relative z-10">
        Skills
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center bg-white p-4 rounded shadow"
          >
            <skill.icon
              className="w-6 h-6 mr-2 z-10"
              style={{ color: skill.color }}
            />
            <span className="text-gray-800 z-10">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
