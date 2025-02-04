import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaDatabase, FaCloud, FaPaintBrush, FaLock } from "react-icons/fa";

const servicesData = [
  { icon: <FaCode size={40} />, title: "Web Development", desc: "Modern and scalable web applications with latest technologies." },
  { icon: <FaMobileAlt size={40} />, title: "App Development", desc: "Custom mobile apps for iOS & Android with smooth UI/UX." },
  { icon: <FaDatabase size={40} />, title: "Database Management", desc: "Secure and efficient database solutions for your business." },
  { icon: <FaCloud size={40} />, title: "Cloud Services", desc: "Reliable cloud hosting and storage solutions." },
  { icon: <FaPaintBrush size={40} />, title: "UI/UX Design", desc: "Creative and user-friendly designs to enhance user experience." },
  { icon: <FaLock size={40} />, title: "Cyber Security", desc: "Advanced security solutions to protect your digital assets." }
];

const Services = () => {
  return (
    <section className="py-12 bg-gray-900 text-white px-6 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h2>
        <p className="text-lg leading-relaxed mb-8">We provide top-notch digital solutions tailored to your needs.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-blue-400 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
