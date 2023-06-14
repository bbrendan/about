import React from "react";

import chain from "../images/chain2.png";

const Landing = () => {
  return (
    <div id="home" className="scroll-page">
      <div className="home-content">
        <h1 style={{ fontSize: "72px" }}>
          Hi, I'm Brendan 👋 <br /> A Full-Stack Developer
        </h1>
        <p style={{ fontSize: "24px" }}>
          Currently based in Toronto, Ontario - two years of experience building
          applications with a passion for creation and design.
        </p>
      </div>
      <img
        src={chain}
        alt="chain"
        style={{ rotate: "85deg", width: "400px" }}
      />
    </div>
  );
};

export default Landing;
