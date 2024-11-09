import React from "react";
import "./aboutpage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const SocialLinks = () => {
  return (
    <div className="SocialLinks_Container">
      <div className="Socials">
        <a
          href="https://www.instagram.com/_mishraagaurav/"
          target={"_blank"}
          rel="noopener noreferrer"
       
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="https://www.youtube.com/@GauravMishra-ht3rh"
          target={"_blank"}
          rel="noopener noreferrer"
        
        >
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a
          href="https://www.linkedin.com/in/gaurav-mishra-2668691b3/"
          target={"_blank"}
          rel="noopener noreferrer"
      
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a
          href="https://github.com/gauravMishra08"
          target={"_blank"}
          rel="noopener noreferrer"
  
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
