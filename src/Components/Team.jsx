import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import "swiper/css";
import "swiper/css/effect-coverflow";

const teamMembers = [
  {
    name: "Lallu mia",
    role: "Full Stack Developer",
    img: "https://randomuser.me/api/portraits/men/10.jpg",
    github: "",
    linkedin: "",
    twitter: "",
    facebook: ""
  },
  {
    name: "sada mia",
    role: "UI/UX Designer",
    img: "https://randomuser.me/api/portraits/men/20.jpg",
    github: "",
    linkedin: "",
    twitter: "",
    facebook: ""
  },
  {
    name: "dikbaji dada",
    role: "Project Manager",
    img: "https://randomuser.me/api/portraits/women/30.jpg",
    github: "",
    linkedin: "",
    twitter: "",
    facebook: ""
  },
  {
    name: "malu mia",
    role: "Mobile Developer",
    img: "https://randomuser.me/api/portraits/men/40.jpg",
    github: "",
    linkedin: "",
    twitter: "",
    facebook: ""
  },
  {
    name: "cikon ali",
    role: "Cyber Security Analyst",
    img: "https://randomuser.me/api/portraits/women/50.jpg",
    github: "",
    linkedin: "",
    twitter: "",
    facebook: ""
  },
  {
    name: "Mollah josim",
    role: "Cloud Engineer",
    img: "https://randomuser.me/api/portraits/men/60.jpg",
    github: "",
    linkedin: "",
    twitter: "",
    facebook: ""
  }
];

const Team = () => {
  return (
    <section className="py-16 bg-gray-900 text-white px-6 lg:px-16 text-center">
      <h2 className="text-4xl font-bold mb-6 text-white">Meet Our Team</h2>
      <p className="text-lg leading-relaxed mb-12 text-gray-300">Our experts are here to help you succeed.</p>

      <Swiper 
        modules={[Autoplay, EffectCoverflow]}
        slidesPerView={3}
        centeredSlides={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        effect="coverflow"
        coverflowEffect={{ rotate: 30, stretch: 0, depth: 100, modifier: 1, slideShadows: true }}
        breakpoints={{
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          640: { slidesPerView: 1 }
        }}
        className="max-w-4xl mx-auto"
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index} className="relative group">
            <div className="w-64 h-96 bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform transform group-hover:scale-105">
              <img src={member.img} alt={member.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                <p className="text-blue-400">{member.role}</p>
                <div className="flex justify-center gap-4 mt-4">
                  <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                    <FaGithub size={22} />
                  </a>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                    <FaLinkedin size={22} />
                  </a>
                  <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                    <FaTwitter size={22} />
                  </a>
                  <a href={member.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                    <FaFacebook size={22} />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Team;
