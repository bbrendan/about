import React from 'react';

import tempLogo from'../temp/temp.png';

const Landing = () => {
  return (
    <div id="home" className="scroll-page">
      <h1 style={{ fontSize: "60px" }}>
        Full-Stack Developer
      </h1>
      <p style={{ fontSize: "18px" }}>
        Currently based in Toronto, Ontario - two years of experience building
        applications with a passion for creation and design.
      </p>
      <img src={tempLogo} alt="Italian Trulli" />
    </div>
  );
};
  
export default Landing;