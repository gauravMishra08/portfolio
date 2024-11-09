import React from "react";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import "./homepage.css";
import Contact from "../../components/Contact/Contact";
const Homepage = () => {
  document.title = "Portfolio | Home";
  return (
    <div>
      <div className="section-flex">
        <div id="hero-page">
          <Hero />
        </div>

        <div id="about-page">
          <About />
        </div>
        <div id="contact-page">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
