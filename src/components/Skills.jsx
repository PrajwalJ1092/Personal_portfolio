import React, { useEffect } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGithub,
  FaGitAlt,
  FaDocker,
  FaJava,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiMysql,
  SiMongodb,
  SiPostman,
  SiBootstrap,
  SiSpringboot,
  SiWebflow,
  SiExpress,
} from "react-icons/si";
import { FaC } from "react-icons/fa6";
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";

const skillsData = [
  {
    category: "Programming Languages",
    items: [
      { icon: <FaC />, name: "C" },
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-300" />,
      },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Java", icon: <FaJava /> },
    ],
  },
  {
    category: "Web Technologies",
    items: [
      {
        name: "Next.js",
        icon: <SiNextdotjs className="bg-white text-black rounded-xl" />,
      },
      { name: "React.js", icon: <FaReact className="text-blue-400" /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-blue-300" />,
      },
      { name: "Bootstrap", icon: <SiBootstrap className="text-purple-700" /> },
      { name: "Redux", icon: <SiRedux className="text-purple-900" /> },
      { name: "Webflow", icon: <SiWebflow className="text-blue-500" /> },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MangoDB", icon: <SiMongodb className="text-green-600" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-950 bg-[#caf0f8] rounded-xl" /> },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: <FaGitAlt className="text-red-600" /> },
      { name: "Github", icon: <FaGithub /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "MySQL", icon: <SiExpress className="text-blue-950 bg-[#caf0f8] rounded-xl" /> },
      
    ],
  },
];

const SkillSection = ({ category, items }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, duration: 0.5 }}
    className="skill-section bg-white/10 backdrop-blur-sm rounded-xl shadow-lg border-2 border-transparent hover:border-[#48cae4] transition-all duration-300 mb-8"
  >
    <h3 className="text-2xl text-center font-semibold text-[#48cae4] pt-4">{category}</h3>
    <div className="skills p-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="skill-item bg-white/5 hover:bg-[#48cae4] text-[#48cae4] hover:text-white rounded-lg p-4 transition-all duration-300 flex flex-col items-center justify-center"
          data-aos="fade-up"
          whileHover={{ scale: 1.05, boxShadow: "0 4px 8px rgba(74, 222, 128, 0.4)" }}
          aria-label={item.name}
        >
          {item.icon && <span className="skill-icon text-3xl mb-2">{item.icon}</span>}
          <span className="text-sm font-medium">{item.name}</span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="relative sigmar-regular min-h-screen py-16 flex flex-col justify-center items-center">
      {/* Static Background with Black and White Lines */}
      <div className="absolute inset-0 -z-10">
        {/* Dark background */}
        <div className="absolute inset-0" />
        
        {/* Black and white line patterns */}
        <div className="absolute inset-0">
          {/* Horizontal white lines */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={`h-line-${i}`}
              className="absolute h-px bg-[#caf0f827] w-full"
              style={{ top: `${i * 5}%` }}
            />
          ))}
          
          {/* Vertical white lines */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={`v-line-${i}`}
              className="absolute w-px bg-[#caf0f827] h-full"
              style={{ left: `${i * 5}%` }}
            />
          ))}
          
          {/* Diagonal black lines */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={`d-line-${i}`}
                className="absolute h-px bg-[#caf0f827] w-full origin-top-left rotate-45"
                style={{ 
                  top: `${i * 20}%`,
                  left: '0',
                  width: '150%' 
                }}
              />
            ))}
            
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={`d-line-rev-${i}`}
                className="absolute h-px bg-black w-full origin-top-right -rotate-45"
                style={{ 
                  top: `${i * 20}%`,
                  right: '0',
                  width: '150%' 
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="skills-container max-w-4xl w-full px-4 relative z-10">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-[#48cae4] text-center text-2xl uppercase mb-7"
        >
          My Expertise
        </motion.h2>
        
        <motion.h1 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-[#48cae4] text-center text-4xl md:text-6xl font-semibold mb-16"
        >
          Technical Skills
        </motion.h1>

        {skillsData.map((data, index) => (
          <SkillSection 
            key={index} 
            category={data.category} 
            items={data.items} 
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;