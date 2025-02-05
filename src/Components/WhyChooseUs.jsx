import React from "react";
import { FaCheckCircle, FaLightbulb, FaUsers, FaChartLine, FaClock, FaShieldAlt } from "react-icons/fa";

const features = [
  {
    title: "Innovative Designs",
    icon: <FaLightbulb size={40} className="text-blue-500" />,
    description: "We create stunning, modern, and user-friendly websites with cutting-edge UI/UX design."
  },
  {
    title: "Experienced Team",
    icon: <FaUsers size={40} className="text-green-500" />,
    description: "Our team consists of industry experts with years of experience in web development."
  },
  {
    title: "Proven Track Record",
    icon: <FaChartLine size={40} className="text-purple-500" />,
    description: "We have successfully delivered 100+ high-quality websites for businesses worldwide."
  },
  {
    title: "On-Time Delivery",
    icon: <FaClock size={40} className="text-yellow-500" />,
    description: "We ensure timely delivery of projects without compromising quality and performance."
  },
  {
    title: "Reliable & Secure",
    icon: <FaShieldAlt size={40} className="text-red-500" />,
    description: "We prioritize security and reliability, ensuring a seamless and secure experience."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-6 lg:px-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-400">Why Choose Us</h2>
        <p className="text-lg text-gray-300 mt-2">Web Design Company That You Can Trust</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-center gap-4">
              {feature.icon}
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
            </div>
            <p className="mt-3 text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
