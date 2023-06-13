import React from "react";

const About = () => {
  return (
    <div id="about" className="scroll-page">
      <h1>Hi, I'm Brendan 👋</h1>
      <h3>I'm a full-stack developer currently based in Toronto, Canada</h3>
      <p>
        I embarked on my journey as a full stack developer over 3 years ago, and I've been hooked ever since! With a natural curiosity and a passion for continuous growth, I thrive on tackling design and project challenges head-on.
        <br />
        I've had the opportunity to dive into both the front end and back end of web applications, honing my skills along the way. From crafting engaging user interfaces to building robust server-side logic, I enjoy the full spectrum of web development.
        <br />
        Constantly driven by a desire to learn, I'm always on the lookout for new technologies and techniques to enhance my skillset. Each design or project problem I encounter becomes an opportunity for me to expand my knowledge and find innovative solutions.
      </p>
      <div className="current-work">
        <p>Currently working at </p>
        <img src="https://www.method.me/wp-content/uploads/2021/05/Logo-Method-darkblue.svg" alt="" style={{ width: '120px', height: '30px', marginLeft: '8px' }} />
      </div>
    </div>
  );
};

export default About;
