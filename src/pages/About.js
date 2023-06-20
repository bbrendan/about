import React from "react";

// components
import InfoGrid from "../components/InfoGrid/InfoGrid";

const About = () => {
  return (
    <div id="about" className="scroll-page">
      <h2 className="about-title" style={{ fontSize: "60px" }}>
        Sharing My Passion
      </h2>
      <div className="content-section">
        <p>
          With a natural curiosity and a passion for continuous growth, I thrive
          on tackling design and project challenges head-on.
        </p>
        <p>
          I've had the opportunity to dive into both the front end and back end
          of web applications, honing my skills along the way. From crafting
          engaging user interfaces to building robust server-side logic, I enjoy
          the full spectrum of web development.
        </p>
      </div>
      <div className="about-grid" style={{ margin: "16px" }}>
        <InfoGrid />
      </div>
      <div className="current-work" style={{ display: "flex" }}>
        <p style={{ margin: '0px 6px' }}>Currently working at </p>
        <a href="https://www.method.me">
          <img
            src="https://www.method.me/wp-content/uploads/2021/05/Logo-Method-darkblue.svg"
            alt=""
            style={{ width: "6rem" }}
          />
        </a>
      </div>
    </div>
  );
};

export default About;
