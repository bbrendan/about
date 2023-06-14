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
      <div className="content-section">
        <h1 style={{ fontSize: "60px" }}>Skills and Experience</h1>
        <p style={{ fontSize: "16px" }}>
          Began my developer journey as a full stack developer over 3 years ago.
          I'm naturally curious and perpetually working on improving my skillset
          one design / project problem at a time. Experienced in developing both
          the front and back end of web applications.
        </p>
        <p>
          Vist my <a href="https://www.linkedin.com/brendanfarrell">linkedin</a>{" "}
          for more information or to contact me!
        </p>
      </div>
      <div className="card-section" style={{ display: "inline-flex" }}>
        <Card
          title="Frontend"
          icon={
            <SpaceDashboardIcon
              style={{
                transform: "scale(2)",
                display: "block",
                margin: "auto",
              }}
            />
          }
          subtitle="Languages / Frameworks"
          subtext="HTML, CSS, JS, Angular, Bootstrap, React, Figma, etc."
        />
        <Card
          title="Backend"
          icon={
            <TerminalIcon
              style={{
                transform: "scale(2)",
                display: "block",
                margin: "auto",
              }}
            />
          }
          subtitle="Languages / Tools"
          subtext="C#, Python, SQL, MongoDB, RabbitMQ, Redis, Git, etc."
        />
        <Card
          title="Design"
          icon={
            <DesignServicesIcon
              style={{
                transform: "scale(2)",
                display: "block",
                margin: "auto",
              }}
            />
          }
          subtitle="Things / Software"
          subtext="UI, Logos, Digital Art, Photoshop, Illustrator, etc."
        />
      </div>
    </div>
  );
};

export default Skills;
