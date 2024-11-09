import React from "react";
import "./aboutpage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import profilepicture from "../../common/images/ProfilePicture.jpeg";
import AboutCarousel from "./AboutCarousel";
import SocialLinks from "./SocialLinks";
const AboutPage = () => {
  document.title = "Portfolio | About";
  return (
    <div className="aboutpage_Wrapper">
      <div className="about_Wrapper">
        <div className="about_Heading">ABOUT</div>
        <div className="about_container">
          <div className="about_L">
            <img src={profilepicture} alt="" className="about_Image" />
          </div>
          <div className="about_R">
            <p>
            I'm Gaurav Mishra, a driven B.Tech Computer Science student specializing in Cybersecurity at {" "}
              <span className="special">
                SRM Institute of Science and Technology
              </span>
              . My passion lies in programming and design, where I leverage my technical knowledge to create user-centric and visually impactful digital solutions. With proficiency in {" "}
              <span className="special">
              HTML, CSS, JavaScript, and C/C++, along with design tools like Figma, Photoshop, and Illustrator
              </span>
              , I focus on crafting seamless user experiences and intuitive interfaces. {" "}
              <span className="special">
                 From leading creative domains in GitHub Community SRM
              </span>
              , to designing innovative projects like UNISphere, I thrive in environments where technology and creativity intersect.

Beyond technical skills, I excel in project management, teamwork, and creative problem-solving, consistently aiming to transform concepts into engaging, real-world applications. If you're looking for a motivated designer and developer with a unique blend of creativity and technical expertise, let’s connect to turn ideas into engaging digital experiences! {" "}
            
            </p>
            <div className="about_Buttons">
              <a
                href="https://drive.google.com/file/d/1ViXYl_GrmfkTWrzD7UXja3-RrGDEcZm8/view?usp=sharing"
                download="Gaurav-Resume..pdf"
                aria-label="Download Resume"
              >
                <div className="resume_Download">
                  <FontAwesomeIcon icon={faFile} />
                  <p>Download Resume</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="carousel_sociallinks_container">
          <AboutCarousel />
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
