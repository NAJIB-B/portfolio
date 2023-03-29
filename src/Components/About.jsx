import React from 'react'

import '../styles/About.css'

const About = () => {
  const calculate_age = () => {
    var today = new Date();
    var birthDate = new Date("1994-10-16");
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age_now--;
    }
    return age_now;
  }
  return (
    <div className='about' id="about">
      <h2>Get To Know Me</h2>
      <div className="words">
      Hello, my name is Muhammad Najib Bala, and I'm a frontend developer. I'm passionate about building beautiful and intuitive webapps that users will love. My skills include React js, Typescript, and Next js. I have experience with responsive design, cross-browser compatibility, and accessibility. I'm constantly learning and improving my skills, and I'm always excited to take on new challenges.

In addition to technical skills, I'm a strong communicator and a team player. I'm comfortable working with designers, developers, and stakeholders to ensure that projects are completed on time and within budget. I'm detail-oriented, organized, and able to manage my time effectively.

I'm excited about the opportunity to work with a team that values creativity, collaboration, and innovation. I believe that my skills, passion, and enthusiasm would make me a valuable asset to any team. Thank you for considering my application.
      </div>
    </div>
  )
}
export default About;
