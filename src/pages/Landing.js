import React from "react";

// components
import SocialsMenu from "../components/SocialsMenu/SocialsMenu";

const Landing = () => {
  return (
    <div id="home" className="scroll-page home-page">
      <div className="home-content">
        <div style={{ display: 'flex' }}>
          <h1 style={{ fontSize: "120px" }}>Hi, I'm Brendan</h1>
        </div>
        <h3 style={{ fontSize: "60px" }}>Full-Stack Developer</h3>
        <p style={{ fontSize: "18px" }}>
          Currently based in Toronto, Ontario - two years of experience building
          applications with a passion for creation and design.
        </p>
      </div>
      <div className="contact-content" style={{ marginTop: "120px" }}>
        <SocialsMenu />
      </div>
    </div>
  );
};

export default Landing;
