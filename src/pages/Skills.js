import React from "react";

// components
import Card from "../components/Card/Card";

// icons
import AWSIcon from '../icons/AWSIcon';
import AngularIcon from '../icons/AngularIcon';
import JiraIcon from '../icons/JiraIcon';
import JavaScriptIcon from '../icons/JavaScriptIcon';
import NETIcon from '../icons/NETIcon';
import RabbitMQIcon from '../icons/RabbitMQIcon';
import MongoIcon from '../icons/MongoIcon';
import SQLIcon from '../icons/SQLIcon';
import ReactIcon from '../icons/ReactIcon';
import FigmaIcon from '../icons/FigmaIcon';

const skillsData = [
  { title: "React", logo: <ReactIcon /> },
  { title: ".NET", logo: <NETIcon /> },
  { title: "Figma", logo: <FigmaIcon /> },
  { title: "JavaScript", logo: <JavaScriptIcon /> },
  { title: "SQL", logo: <SQLIcon /> },
  { title: "JIRA", logo: <JiraIcon /> },
  { title: "MongoDB", logo: <MongoIcon /> },
  { title: "RabbitMQ", logo: <RabbitMQIcon /> },
  { title: "Angular", logo: <AngularIcon /> },
  { title: "AWS", logo: <AWSIcon /> },
];

const Skills = () => {
  return (
    <div id="skills" className="scroll-page">
      <div className="content-section">
        <h1 style={{ fontSize: "60px" }}>Skills and Experience</h1>
        <p>
          Constantly driven by a desire to learn, I'm always on the lookout for
          new technologies and techniques to enhance my skillset. Each design or
          project problem I encounter becomes an opportunity for me to expand my
          knowledge and find innovative solutions.
        </p>
      </div>
      <div className="card-section">
        {skillsData.map((skill, index) => (
          <Card key={index} title={skill.title} logo={skill.logo} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
