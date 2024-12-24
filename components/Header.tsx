import Image from "next/image";
import { Github, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import ProfileImg from "../public/file.jpg";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <Image
            src={ProfileImg}
            alt="Saumya Singh Chauhan"
            width={150}
            height={150}
            className="rounded-full mr-4"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-900 relative z-10">
              Saumya Singh Chauhan
            </h1>
            <h2 className="text-xl text-gray-700 relative z-10">
              Frontend Engineer
            </h2>
            <div className="flex mt-2 space-x-2">
              <a
                href="https://github.com/saumya2611"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#181717] hover:text-gray-900 z-10"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/saumya-singh-chauhan/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0A66C2] hover:text-blue-700 z-10"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <div className="mb-4 md:mb-0 md:mr-4 text-gray-700">
            <p className="flex items-center relative z-10">
              <MapPin size={16} className="mr-2 text-red-500" /> Delhi, India
            </p>
            <p className="flex items-center relative z-10">
              <Phone size={16} className="mr-2 text-green-500" /> +91 8354081884
            </p>
            <p className="flex items-center relative z-10">
              <Mail size={16} className="mr-2 text-blue-500" />{" "}
              somu0438@gmail.com
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
