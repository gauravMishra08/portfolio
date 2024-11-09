import React from "react";
import "./hero.css";
import github from "../../common/images/github.png";
import linkedin from "../../common/images/linkedin.png";
import Heroanim from "../../Animations/Heroanim";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
const Hero = () => {
  return (
    <div className="heroitems">
      <div className="infinitescroll">
        <Heroanim />
      </div>
      <div className="desc">
        <p className="line1">Hey There I'm</p>
        <h1 className="name">GAURAV</h1>
        <p className="line2">
          Currently Studying Computer Science and Engineering
        </p>
        <div className="socials">
          <a
            href="https://www.linkedin.com/in/gaurav-mishra-2668691b3/"
            target={"_blank"}
            rel="noreferrer"
          >
            <img src={linkedin} alt="Linkedinacc" className="linkedinacc" />
          </a>
          <a href="https://github.com/gauravMishra08" target={"_blank"} rel="noreferrer">
            <img src={github} alt="githubacc" className="githubacc" />
          </a>
        </div>
      </div>
      <FontAwesomeIcon icon={faAnglesDown} bounce className="arrow-Down" />
    </div>
  );
};

export default Hero;