import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    image: "",
    description: "A fully responsive online shopping platform.",
    liveLink: "",
    githubLink: "",
  },
  {
    id: 2,
    title: "Portfolio Website",
    image: "",
    description: "Personal portfolio with interactive UI.",
    liveLink: "",
    githubLink: "",
  },
  {
    id: 3,
    title: "Business Dashboard",
    image: "",
    description: "Data visualization and analytics dashboard.",
    liveLink: "https://your-dashboard-live-link.com",
    githubLink: "",
  },
  {
    id: 4,
    title: "Restaurant Website",
    image: "",
    description: "Online food ordering and restaurant website.",
    liveLink: "",
    githubLink: "",
  },
  {
    id: 5,
    title: "Travel Booking App",
    image: "",
    description: "User-friendly travel booking application.",
    liveLink: "",
    githubLink: "",
  },
  {
    id: 6,
    title: "Crypto Exchange",
    image: "",
    description: "Secure and fast cryptocurrency exchange platform.",
    liveLink: "",
    githubLink: "",
  },
];

const RecentWorks = () => {
  return (
    <section className="py-12 bg-gray-900 text-white px-6 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Recent Works
        </motion.h2>
        <p className="text-lg leading-relaxed mb-8">
          Some of our latest projects built with modern technology.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-400 mt-2">{project.description}</p>
                <div className="mt-4 flex justify-center gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition duration-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentWorks;
