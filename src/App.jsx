import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import ProjectSection from "./components/ProjectSection";
import SchedulePentest from "./components/SchedulePentest";
import ServicesSection from "./components/ServicesSection";
import CompaniesHor from "./components/CompainesHor";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <section id="home">
          <Home />
          <ServicesSection />
        </section>
        <CompaniesHor/>
        <section id="about">
          <Intro />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <CompaniesHor/>
        <section id="projects">
          <ProjectSection />
        </section>
      </main>
      <SchedulePentest />
    </div>
  );
}

export default App;
