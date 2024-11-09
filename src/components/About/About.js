import React from "react";
import "./about.css";
import { NavLink } from "react-router-dom";
import { animateScroll } from "react-scroll";
const About = () => {
  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };
  return (
    <div className="about_Container">
      <h2 className="about-Heading">About</h2>
      <p className="about_Desc">
I'm Gaurav, a highly motivated B.Tech Computer Science student with a strong focus on design and a passion for creating user-centric digital experiences. Fueled by both creativity and technical skill, I strive to blend my design expertise with programming knowledge to contribute to innovative and visually captivating projects. I'm driven to bring ideas to life that are both functional and aesthetically engaging, making a meaningful impact in the digital space.
      </p>
      <div className="more_About">
        <NavLink to="/about" className="more_About" onClick={scrollToTop}>
          More..
        </NavLink>
      </div>
    </div>
  );
};

export default About;
