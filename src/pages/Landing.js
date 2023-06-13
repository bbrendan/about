import React from "react";

import chain from "../images/chain1.jpg";

const Landing = () => {
  return (
    <div id="home" className="scroll-page">
      <div className="home-content">
        <h1 style={{ fontSize: "72px" }}>Hi, I'm Brendan 👋</h1>
        <p style={{ fontSize: "24px" }}>
          I'm a full-stack developer currently based in Toronto, Ontario - two years of experience building
          applications with a passion for creation and design.
        </p>
      </div>
      <img src={chain} alt="chain" style={{ width: '-webkit-fill-available', position: 'relative', top: '60px', zIndex: '0' }}/>
    </div>
  );
};

export default Landing;
