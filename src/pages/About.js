import React from "react";

// components
import InfoGrid from "../components/InfoGrid/InfoGrid";

// images
import chain from "../images/chain3.png";

const About = () => {
  return (
    <div id="about" className="scroll-page">
      <h2 className="about-title" style={{ fontSize: '48px' }}>Sharing My Passion</h2>
      <div className="content-section">
        <p style={{ fontSize: "16px" }}>
          With a natural curiosity and a passion for continuous growth, I thrive
          on tackling design and project challenges head-on.
        </p>
        <p style={{ fontSize: "16px" }}>
          I've had the opportunity to dive into both the front end and back end
          of web applications, honing my skills along the way. From crafting
          engaging user interfaces to building robust server-side logic, I enjoy
          the full spectrum of web development.
        </p>
        <p style={{ fontSize: "16px" }}>
          Constantly driven by a desire to learn, I'm always on the lookout for
          new technologies and techniques to enhance my skillset. Each design or
          project problem I encounter becomes an opportunity for me to expand my
          knowledge and find innovative solutions.
        </p>
      </div>
      <div className="about-grid" style={{ marginBottom: "16px", display: "flex", alignItems: "center" }}>
        <div style={{ flex: 1, marginRight: "16px", textAlign: "center" }}>
          <img src={chain} alt="Chain" style={{ maxWidth: "100%", height: "auto" }} />
        </div>
        <div style={{ flex: 4 }}>
          <InfoGrid />
        </div>
        <div style={{ flex: 1, marginLeft: "16px", textAlign: "center" }}>
          <img src={chain} alt="Chain" style={{ maxWidth: "100%", height: "auto", rotate: '180deg' }} />
        </div>
      </div>
      <div className="current-work">
        <p>Currently working at </p>
        <img
          src="https://www.method.me/wp-content/uploads/2021/05/Logo-Method-darkblue.svg"
          alt=""
          style={{ width: "120px", height: "30px", marginLeft: "8px" }}
        />
      </div>
    </div>
  );
};

export default About;
