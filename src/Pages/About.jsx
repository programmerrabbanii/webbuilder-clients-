import React from "react";
import about from "../assets/about.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-16 bg-gray-900 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Us
        </motion.h2>
        <motion.p
          className="text-lg text-white leading-relaxed mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          We are committed to providing the best services and solutions to help
          our clients achieve their goals. With a passionate team and innovative
          strategies, we bring your vision to life.
        </motion.p>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={about}
              alt="About Us"
              className="rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105"
            />
          </motion.div>
          <motion.div
            className="text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              Our Mission
            </h3>
            <p className="text-white mb-4">
              We believe in delivering excellence through our expertise,
              creativity, and commitment to customer satisfaction.
            </p>
            <h3 className="text-2xl font-semibold text-white mb-4">
              Why Choose Us?
            </h3>
            <ul className="list-disc list-inside text-white space-y-2">
              <motion.li whileHover={{ scale: 1.1 }}>
                Innovative Solutions
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }}>
                Experienced Professionals
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }}>
                Customer-Centric Approach
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }}>
                Affordable & Reliable Services
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
