import "./intro.css";
import { FaAward } from "react-icons/fa";
import React, { useEffect } from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaGithub, FaTwitter, FaEnvelope, FaLinkedin } from "react-icons/fa";

const Intro = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true }); // Initialize AOS
  }, []);

  return (
    <section className="min-h-screen sigmar-regular flex justify-center items-center relative" id="about">
      {/* Line Background */}
      <div className="absolute inset-0 -z-10">
        {/* Dark background */}
        <div className="absolute inset-0" />
        
        {/* Black and white line patterns */}
        <div className="absolute inset-0">
          {/* Horizontal white lines */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={`h-line-${i}`} className="absolute h-px bg-[#caf0f827] w-full" style={{ top: `${i * 5}%` }} />
          ))}
          
          {/* Vertical white lines */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={`v-line-${i}`} className="absolute w-px bg-[#caf0f827] h-full" style={{ left: `${i * 5}%` }} />
          ))}

          {/* Diagonal black lines */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={`d-line-${i}`} className="absolute h-px bg-[#caf0f827] w-full origin-top-left rotate-45" style={{ top: `${i * 20}%`, left: "0", width: "150%" }} />
            ))}
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={`d-line-rev-${i}`} className="absolute h-px bg-[#caf0f827] w-full origin-top-right -rotate-45" style={{ top: `${i * 20}%`, right: "0", width: "150%" }} />
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24 relative z-10">
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-5xl text-[#48cae4] font-bold">About Me</h2>
        </div>

        <div className="flex flex-wrap justify-center">
          {/* Profile Image */}
          <div className="w-full md:w-1/2 xl:w-1/3 p-6 text-center" data-aos="zoom-in">
            <div className="about__me-image">
              <img src="src/assets/image2.jpg" height={400} alt="" className="rounded-lg shadow-lg" />
            </div>
          </div>

          {/* About Content */}
          <div className="w-full md:w-1/2 xl:w-2/3 p-6" data-aos="fade-left">
            <div className="about__content">
              <p className="text-xl text-[#48cae4]">
                1+ years experienced Frontend Developer with expertise in building dynamic, responsive, and user-friendly web interfaces using ReactJS. Skilled in transforming wireframes and designs into high-quality, interactive web applications with clean and efficient code. Proficient in JavaScript and React workflows, with hands-on experience in optimizing frontend performance, identifying and resolving issues, and ensuring seamless user experiences .
              </p>

              {/* Social Icons with Animations */}
              <div className="flex gap-5 mt-6 justify-center md:ml-14 lg:mr-20   ">
                <a href="https://github.com/PrajwalJ1092" target="_blank" rel="noopener noreferrer" className="text-[#48cae4] hover:text-white transition-transform transform hover:scale-110" data-aos="flip-up" data-aos-delay="200">
                  <FaGithub size={24} />
                </a>
                <a href="https://x.com/PJainkeri7" target="_blank" rel="noopener noreferrer" className="text-[#48cae4] hover:text-blue-400 transition-transform transform hover:scale-110" data-aos="flip-up" data-aos-delay="400">
                  <FaTwitter size={24} />
                </a>
                <a href="mailto:prajwaljainkeri2001@gmail.com" className="text-[#48cae4] hover:text-red-500 transition-transform transform hover:scale-110" data-aos="flip-up" data-aos-delay="600">
                  <FaEnvelope size={24} />
                </a>
                <a href="https://www.linkedin.com/in/prajwal-jainkeri-492434228/" target="_blank" rel="noopener noreferrer" className="text-[#48cae4] hover:text-blue-600 transition-transform transform hover:scale-110" data-aos="flip-up" data-aos-delay="800">
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
