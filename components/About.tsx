import { Download } from "lucide-react";

export default function About() {
  return (
    <section className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 relative z-10">
        About Me
      </h2>
      <p className="text-gray-700 mb-4 relative pr-8 z-10">
        Motivated Frontend Developer with hands-on experience in HTML, CSS,
        JavaScript, React, Redux, Tailwind, Bootstrap UI, and Strapi. Passionate
        about crafting user-friendly interfaces, optimizing solutions, and
        exploring cutting-edge JavaScript technologies.
      </p>
      <a
        href="https://drive.google.com/file/d/1tDvq7ESAPFivw0oiWd2zbBbuCYXjMYdC/view"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors relative z-10"
      >
        <Download size={16} className="mr-2" />
        Download Resume
      </a>
    </section>
  );
}
