import React from "react";
import { Typewriter } from "react-simple-typewriter";
import hero from "../assets/hero-removebg-preview.png";

const Bannar = () => {
  return (
    <div className="hero bg-gray-900 h-[80%] text-white min-h-screen flex items-center">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-6 lg:px-16">
        
        {/* Content Section (Right Side) */}
        <div className="w-full lg:w-1/2   text-center lg:text-left mt-10 lg:mt-0">
          <h2 className="text-xl font-semibold text-blue-400 uppercase">
            🚀 Your One-Stop Digital Solution
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-2">
            We Provide  
            <span className="text-blue-400">
              <Typewriter
                words={[ 
                  "Frontend Development",
                  "Backend Development",
                  "WordPress Solutions",
                  "Social Media Marketing",
                  "SEO Optimization",
                  "Custom Web Applications",
                  "E-commerce Development"
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h1>
          <p className="py-6 text-gray-300">
            Grow your business with our expert development & marketing services. Whether it's a custom website, SEO boost, or social media marketing – we've got you covered!
          </p>
          <div className="flex gap-4 justify-center lg:justify-start">
            <button className="btn btn-primary">WATCH</button>
            <button className="btn btn-outline border-white text-white">
              CONTACT US
            </button>
          </div>
        </div>

        {/* Image Section (Left Side) */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <img
            src={hero}
            alt="Web Builder Preview"
            className="max-w-sm lg:max-w-md rounded-lg shadow-2xl"
          />
        </div>
        
      </div>
    </div>
  );
};

export default Bannar;
