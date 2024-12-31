import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import TodoAppIcon from "../public/todo-app.jpeg";
import StopwatchIcon from "../public/timer.png";
import ReactTodoItem from "../public/todo-react.png";
import Shoppinglist from "../public/shopinglist.png";
import Property from "../public/property.png";
import Tutor from "../public/tutor.png";
import Leno from "../public/leno.png";
import Edgeledger from "../public/edgeledger.png";
import Hotel from "../public/hotel.png";
import Calculator from "../public/calulator.png";

const projects = [
  {
    title: "Calculator",
    image: Calculator,
    description: "Calculate your mathematical calculation",
    technologies: ["Tailwind CSS", "React"],
    liveLink: "https://calculator-lemon-sigma.vercel.app/",
    githubLink: "https://github.com/saumya2611/calculator",
  },
  {
    title: "Todo Application",
    image: ReactTodoItem,
    description: "A todo application where user can add/edit/delete items",
    technologies: ["React", "Tailwind CSS"],
    liveLink: "https://react-todo-eosin-alpha.vercel.app/",
    githubLink: "https://github.com/saumya2611/React-Todo",
  },
  {
    title: "Timer & Stopwatch",
    image: StopwatchIcon,
    description: "Timer and stopwatch for user",
    technologies: ["React", "Tailwind CSS"],
    liveLink: "https://stop-watch-silk-two.vercel.app/",
    githubLink: "https://github.com/saumya2611/StopWatch",
  },
  {
    title: "Shopping List",
    image: TodoAppIcon,
    description: "Todo application for shopping",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://todo-application-cyan-five.vercel.app/",
    githubLink: "https://github.com/saumya2611/Todo-Application",
  },
  {
    title: "Ecommerce Application",
    image: Shoppinglist,
    description: "Ecommerce website for user",
    technologies: ["React", "Tailwind CSS"],
    liveLink: "https://ecommerce-website-khaki-eta.vercel.app/",
    githubLink: "https://github.com/saumya2611/ecommerce-website",
  },
  {
    title: "Search Property",
    image: Property,
    description: "Search your property",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://search-best-property.vercel.app/",
    githubLink: "https://github.com/saumya2611/Search-Best-Property",
  },
  {
    title: "Tutor website",
    image: Tutor,
    description: "Tutor applicaton for learners",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://tutor-website-gold.vercel.app/",
    githubLink: "https://github.com/saumya2611/Tutor-Website",
  },
  {
    title: "Leno website",
    image: Leno,
    description: "Leno application for developers and creators.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://leno-website-chi.vercel.app/",
    githubLink: "https://github.com/saumya2611/Leno-Website",
  },
  {
    title: "Edgeledger website",
    image: Edgeledger,
    description: "Edgeledger application for business",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://edgeledger-website-ten.vercel.app/",
    githubLink: "https://github.com/saumya2611/Edgeledger_website",
  },
  {
    title: "Hotel website",
    image: Hotel,
    description: "landing page for hotel website",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://hotel-website-iota.vercel.app/",
    githubLink: "https://github.com/saumya2611/Hotel_Website",
  },

  // Add more projects as needed
];

export default function Projects() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 relative z-10">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-md shadow overflow-hidden hover:shadow-2xl transition-all delay-200"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={300}
              height={200}
              className="w-full h-[300px] object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 relative z-10">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-2 relative z-10">
                {project.description}
              </p>
              <p className="mb-2 text-gray-700 relative z-10">
                <strong>Technologies:</strong> {project.technologies.join(", ")}
              </p>
              <div className="flex space-x-2">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="z-10 flex-1 justify-center inline-flex items-center px-3 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                >
                  <ExternalLink size={16} className="mr-1" /> Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="z-10 flex-1 justify-center inline-flex items-center px-3 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
                >
                  <Github size={16} className="mr-1" /> GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
