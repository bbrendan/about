import React from "react";

// components
import SocialsMenu from "../components/SocialsMenu/SocialsMenu";

// icons
import WavingHandOutlinedIcon from '@mui/icons-material/WavingHandOutlined';

const Landing = () => {
  return (
    <div id="home" className="scroll-page">
      <div className="home-content">
        <div style={{ display: 'flex' }}>
          <h1 style={{ fontSize: "120px" }}>Hi, I'm Brendan</h1>
          <WavingHandOutlinedIcon style={{ transform: "scale(6)", margin: '0 auto', marginTop: '4rem', marginLeft: '4rem', color: '#de9556' }} />
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
