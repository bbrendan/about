import React from "react";

// components
import SocialsMenu from "../components/SocialsMenu/SocialsMenu";

const Landing = () => {
  return (
    <div id="home" className="scroll-page home-page">
      <div className="home-content">
        <div style={{ display: 'flex' }}>
          <h1 style={{ fontSize: "7rem", fontFamily: "Roboto Mono", margin: '1rem' }}>Hi, I'm <span class="highlighted">Brendan</span></h1>
        </div>
        <h3 style={{ fontSize: "3rem", fontFamily: "Space Grotesk" }}>Full-Stack Developer</h3>
        <p style={{ fontSize: "1rem", fontFamily: "Space Grotesk" }}>
          Currently based in Toronto, Ontario - two years of experience building
          applications <span className="highlighted">with a passion for creation and design.</span>
        </p>
      </div>
      <div className="contact-content" style={{ marginTop: "120px" }}>
        <SocialsMenu />
      </div>
    </div>
  );
};

export default Landing;
