import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import './Services.css';

// Enhanced ServiceCard component
const ServiceCard = ({ title, description, icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`servicecontent bg-white/10 backdrop-blur-sm text-center p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow h-64 duration-300 relative overflow-hidden z-10
                  ${isHovered ? 'border-2 border-[#48cae4]' : 'border-2 border-transparent'}
                  @media (max-width: 400px) {
                    min-height: 15rem;
                    height: auto;
                    padding: 1rem;
                  }`}
      style={{
        '@media (max-width: 400px)': {
          minHeight: '15rem',
          height: 'auto',
          padding: '1rem',
        }
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card content */}
      <div className="relative z-10">
        <div className={`text-5xl mb-4 transition-transform duration-300 ${isHovered ? 'text-[#48cae4]' : 'text-[#48cae4]'}`}>
          {icon}
        </div>
        <h3 className={`text-xl font-bold mb-2 transition-colors duration-300
                      ${isHovered ? 'text-[#48cae4]' : 'text-[#48cae4]'}`}>
          {title}
        </h3>
        <p className={`text-lg transition-colors duration-300
                    ${isHovered ? 'text-[#48cae4]' : 'text-[#48cae4]'}
                    @media (max-width: 400px) {
                      font-size: 0.875rem;
                    }`}
          style={{
            '@media (max-width: 400px)': {
              fontSize: '0.875rem',
            }
          }}>
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    {
      title: "Website Design",
      description:
        "Craft visually stunning and responsive websites that captivate audiences. Transform your ideas into seamless digital experiences.",
      icon: "📐",
    },
    {
      title: "UI / UX Design",
      description:
        "Design intuitive interfaces that prioritize user satisfaction. Enhance usability and create impactful digital journeys.",
      icon: "💎",
    },
    {
      title: "Photography",
      description:
        "Capture timeless moments with professional photography services. Transform your vision into captivating visual stories.",
      icon: "📷",
    },
  ];

  // Custom CSS for mobile breakpoint
  const mobileStyles = `
    @media (max-width: 400px) {
      .services-container {
        padding-top: 2rem;
        padding-bottom: 2rem;
      }
      .services-title {
        font-size: 1.5rem;
        margin-bottom: 0.75rem;
      }
      .services-subtitle {
        font-size: 1.25rem;
        margin-bottom: 1.5rem;
        padding: 0 0.5rem;
      }
      .services-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;
        width: 100%;
        max-width: 300px;
        margin: 0 auto;
      }
    }
  `;

  return (
    <>
      <style>{mobileStyles}</style>
      <section ref={sectionRef} className="servicecontainer sigmar-regular relative flex flex-col justify-center items-center px-4 py-20 min-h-screen services-container">

        {/* Static Background with Black and White Lines */}
        <div className="absolute inset-0 -z-10">
          {/* Dark background */}
          <div className="absolute inset-0 " />
          
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
                  className="absolute h-px bg-black/30 w-full origin-top-left rotate-45"
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
        
        {/* Content */}
        <motion.div className="relative z-10">
          <motion.h2
            className="text-[#48cae4] text-center text-4xl font-medium uppercase mb-7 services-title"
            initial={{ y: -20, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            My Services
          </motion.h2>
          <motion.h1
            className="text-[#48cae4] text-center text-4xl md:text-6xl font-medium mb-16 services-subtitle"
            initial={{ y: -20, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Crafting stories through design and innovation
          </motion.h1>
          <motion.div
            className="flex flex-col md:flex-row justify-center items-center gap-8 services-grid"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default ServicesSection;