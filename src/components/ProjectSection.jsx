import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EyeIcon, Code, Github, ExternalLink } from 'lucide-react';

const ProjectSection = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: 'Break2Secure',
      description: 'Crafted with modern technologies, Break2Secure features an intuitive and visually appealing interface powered by ReactJS and TailwindCSS.',
      technologies: ['React.js', 'TailWindCss'],
      imageUrl: 'https://www.shutterstock.com/image-vector/futuristic-glowing-hud-display-lock-600nw-2252120759.jpg',
      githubLink: 'https://github.com',
      liveLink: 'https://vercel.com',
      fullDescription: 'A responsive and modern UI crafted with ReactJS and TailwindCSS, designed for seamless user interaction.'
    },
    {
      title: 'Personal Portfolio',
      description: 'Showcasing my journey as a developer with projects built using ReactJS, TailwindCSS, and modern technologies.',
      technologies: ['React', 'Tailwind'],
      imageUrl: 'https://marketplace.canva.com/EAFf9pTh3kg/1/0/1131w/canva-black-and-white-simple-portfolio-cover-page-BRYRBdWQKVU.jpg',
      githubLink: 'https://github.com',
      liveLink: 'https://vercel.com',
      fullDescription: 'Discover my journey as a developer through innovative projects and clean designs. Highlighting expertise in frontend and full-stack development with modern tools.'
    },
    {
      title: 'HotWheels Shopping',
      description: 'Collaborative online learning management system',
      technologies: ['Node.js', 'GraphQL', 'MongoDB', 'React'],
      imageUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1271700/capsule_616x353.jpg?t=1725035139',
      githubLink: 'https://github.com',
      liveLink: 'https://vercel.com',
      fullDescription: 'Designed a scalable e-learning platform with interactive courses, real-time collaboration, and adaptive learning paths.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className="relative sigmar-regular py-16 min-h-screen flex flex-col justify-center">
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
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-[#48cae4] text-center text-2xl uppercase mb-7"
        >
          My Work
        </motion.h2>
        
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-[#48cae4] text-center text-4xl md:text-6xl font-semibold mb-16"
        >
          Featured Projects
        </motion.h1>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-transparent hover:border-[#48cae4] overflow-hidden transition-all duration-300"
            >
              <div className="relative">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-56 object-cover transition-transform duration-300 transform hover:scale-110"
                />
                {hoveredProject === index && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center space-x-6"
                  >
                    <motion.a 
                      href={project.liveLink}
                      target="_blank"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white p-4 rounded-full shadow-lg hover:bg-[#48cae4] transition"
                    >
                      <ExternalLink className="text-blue-600" size={24} />
                    </motion.a>
                    <motion.a 
                      href={project.githubLink}
                      target="_blank"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white p-4 rounded-full shadow-lg hover:bg-[#48cae4] transition"
                    >
                      <Github className="text-gray-800" size={24} />
                    </motion.a>
                  </motion.div>
                )}
              </div>
              <div className="p-6 ">
                <h3 className="text-2xl font-bold mb-3 text-[#48cae4]">{project.title}</h3>
                <p className="text-[#48cae4] text-xl mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1 bg-[#48cae4] text-[#03045e]  rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center px-4 py-2 bg-[#48cae4] text-[#03045e]  rounded-lg hover:bg-[#48cae4] transition"
                  >
                    <EyeIcon className="mr-2" size={18} />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center px-4 py-2 bg- text-[#48cae4] rounded-lg hover:bg-[#03045e] transition"
                  >
                    <Code className="mr-2" size={18} />
                    View Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;