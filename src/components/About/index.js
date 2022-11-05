import React from 'react';
import avatar from '../../assets/avatar.jpg'


function About() {
  return (
    <section className="my-5">
      <h1 id="about">About Me</h1>
      <img src={avatar} className="profileImg my-2" alt="" />
      <div className="my-2">
        <p>
        Hi, I'm Ashley Warford. I am new to coding, but I want to continue to grow and build a career in the industry. 
        <br/>Having experience in teaching, interior design, client relations, and more, I bring a diverse set of skills to the table. I'm ready to find the career where I can apply all I've learned, and programming/ developing is the path I want to take! 
        <br/> Take a look at my portfolio, and check back as it continues to grow. 
        </p>
    </div>
    </section>
  );
}

export default About;