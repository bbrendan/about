import React from "react";

const About = () => {
  return (
    <div id="about" className="scroll-page">
      <h1>Hi, I'm Brendan 👋</h1>
      <h3>I'm a full-stack developer currently working in Toronto, Canada</h3>
      <p>
        Since beginning my journey as a
        freelance designer over 11 years ago, I've done remote work for
        agencies, consulted for startups, and collaborated with talented people
        to create digital products for both business and consumer use. I'm
        quietly confident, naturally curious, and perpetually working on
        improving my chops one design problem at a time.
      </p>
      <div className="current-work">
        <p>Currently working at </p>
        <img src="https://www.method.me/wp-content/uploads/2021/05/Logo-Method-darkblue.svg" alt="" style={{ width: '120px', height: '30px', marginLeft: '8px' }} />
      </div>
    </div>
  );
};

export default About;
