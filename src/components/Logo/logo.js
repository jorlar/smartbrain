import React from "react";
import Tilt from "react-parallax-tilt";
import brain from "./brain.png";
import "./logo.css";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt className="tilt">
        <div className="tilt pa3">
          <img
            style={{ paddingTop: "5px", height: "100px" }}
            src={brain}
            alt="logo"
          />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
