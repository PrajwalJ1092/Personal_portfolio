import React, { useState } from 'react';
import { Calendar, Briefcase, GraduationCap, MapPin } from 'lucide-react';

const PortfolioPage = () => {
  const [activeSection, setActiveSection] = useState('education');

  const educationData = [
    {
      degree: 'Bachelor of Information Science',
      institution: 'KLS Gogte Institute of Technology',
      period: '2019 - 2023',
      location: 'Belagavi, Karnataka'
    },
    {
      degree: 'Pre-University College',
      institution: 'VP Hanchinmani PU College',
      period: '2018 - 2019',
      location: 'Dharwad , Karnataka'
    },
    {
        degree: 'School',
        institution: 'Rajiv Gandhi C.B.S.E School',
        period: '2016 - 2017',
        location: 'Dharwad, Karnataka'
    },
  ];

  const experienceData = [
    {
      title: 'Frontend Developer',
      company: 'The Sparks Foundation',
      period: 'March 2023 - June 2023',
      location: 'Remote',
      responsibilities: [
        'Created a Basic Banking System using HTML , CSS , JavaScript , and PHP ',
        'Features like account creation , fund transfer , and transaction history were implemented.',
        'Designed a user-friendly interface to ensure data accuracy and enhance the customer experience.'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'AI Variant',
      period: ' Feb 2024  - May 2024 ',
      location: 'Bengalore, Karnataka',
      responsibilities: [
        'Developed an Employee Management System using ReactJS, Spring Boot, and MySQL with a responsive frontend and robust backend',
        'Built secure RESTful APIs to streamline HR processes, including efficient onboarding, profile management, and performance tracking.',
        'Gained hands-on experience in building scalable enterprise applications, strengthening full-stack development skills'
      ]
    }
  ];

  const renderSection = () => {
    const data = activeSection === 'education' ? educationData : experienceData;
    
    return data.map((item, index) => (
      <div 
        key={index} 
        className="bg-white/10 backdrop-blur-sm shadow-md rounded-lg p-6 mb-4 transform transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-green-500"
      >
        <div className="flex items-center mb-4">
          {activeSection === 'education' ? <GraduationCap className="mr-3 text-green-400" /> : <Briefcase className="mr-3 text-green-600" />}
          <h3 className="text-xl font-bold text-green-400">{item.degree || item.title}</h3>
        </div>
        <div className="space-y-2">
          <p className="flex items-center text-green-600/80">
            <MapPin className="mr-2 w-4 h-4 text-green-400" />
            {item.institution || item.company}
          </p>
          <p className="flex items-center text-green-600/80">
            <Calendar className="mr-2 w-4 h-4 text-green-400" />
            {item.period}
          </p>
          <p className="flex items-center text-green-600/80">
            <MapPin className="mr-2 w-4 h-4 text-green-400" />
            {item.location}
          </p>
          {item.responsibilities && (
            <ul className="list-disc pl-5 mt-2">
              {item.responsibilities.map((resp, i) => (
                <li key={i} className="text-green-600/80">{resp}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    ));
  };

  return (
    <section className="relative min-h-screen py-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
      {/* Static Background with Black and White Lines - Same as ServicesSection */}
      <div className="absolute inset-0 -z-10">
        {/* Dark background */}
        <div className="absolute inset-0" />
        
        {/* Black and white line patterns */}
        <div className="absolute inset-0">
          {/* Horizontal white lines */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={`h-line-${i}`}
              className="absolute h-px bg-white/10 w-full"
              style={{ top: `${i * 5}%` }}
            />
          ))}
          
          {/* Vertical white lines */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={`v-line-${i}`}
              className="absolute w-px bg-white/10 h-full"
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
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-green-500 text-center text-2xl uppercase mb-7">My Journey</h2>
        <h1 className="text-green-600 text-center text-4xl md:text-6xl font-semibold mb-16">
          Education & Experience
        </h1>
        
        <div className="flex justify-center mb-8">
          <div className="bg-white/10 backdrop-blur-sm shadow-md rounded-full p-1 flex">
            <button
              onClick={() => setActiveSection('education')}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeSection === 'education' 
                  ? 'bg-green-400 text-white' 
                  : 'text-green-400 hover:bg-green-100/20'
              }`}
            >
              Education
            </button>
            <button
              onClick={() => setActiveSection('experience')}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeSection === 'experience' 
                  ? 'bg-green-600 text-white' 
                  : 'text-green-600 hover:bg-green-100/20'
              }`}
            >
              Experience
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {renderSection()}
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;