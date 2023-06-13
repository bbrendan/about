import React from "react";

// components
import Card from "../components/Card/Card";

// icons
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import TerminalIcon from "@mui/icons-material/Terminal";
import DesignServicesIcon from "@mui/icons-material/DesignServices";

const Skills = () => {
  return (
    <div id="skills" className="scroll-page">
      <div className="skills-page" style={{ textAlign: "center" }}>
        <div className="content-section">
          <h1 style={{ fontSize: "60px", margin: '0' }}>Skills and Experience</h1>
          <p style={{ fontSize: "16px", width: '80%' }}>
            Began my developer journey as a full stack developer over 3 years
            ago. I'm naturally curious and perpetually working on improving my
            skillset one design / project problem at a time. Experienced in
            developing both the front and back end of web applications.
          </p>
          <p>
            Vist my{" "}
            <a href="https://www.linkedin.com/brendanfarrell">linkedin</a> for
            more information or to contact me!
          </p>
        </div>
        <div className="card-section">
          <Card
            title="Frontend"
            icon={<SpaceDashboardIcon />}
            subtitle="Languages / Frameworks"
            subtext="HTML, CSS, JS, Angular, Bootstrap, React, Figma, etc."
          />
          <Card
            title="Backend"
            icon={<TerminalIcon />}
            subtitle="Languages / Tools"
            subtext="C#, Python, SQL, MongoDB, RabbitMQ, Redis, Git, etc."
          />
          <Card
            title="Design"
            icon={<DesignServicesIcon />}
            subtitle="Things / Software"
            subtext="UI, Logos, Digital Art, Photoshop, Illustrator, etc."
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
