import React from 'react'

import '../styles/Skills.css'

import { SiJavascript, SiHtml5, SiCss3, SiReact,  SiFirebase, SiTypescript, SiNextdotjs, SiTailwindcss } from 'react-icons/si'

const Skills = () => {
  return (
    <div className='skills'>
      <h2>My Skills</h2>
      <div className="skill">
        <div className="js">
          <SiJavascript />
          <p>JavaScript</p>
        </div>
        <div className="ts">
          <SiTypescript />
          <p>TypeScript</p>
        </div>
        <div >
          <SiNextdotjs />
          <p>Next JS</p>
        </div>
        <div className="html">
          <SiHtml5 />
          <p>HTML</p>
        </div>
        <div className="css">
          <SiCss3 />
          <p>CSS</p>
        </div>
        <div className="react">
          <SiReact />
          <p>React</p>
        </div>
        <div className="tail">
          <SiTailwindcss />
          <p>Tailwind Css</p>
        </div>
       
        <div className="fire">
          <SiFirebase />
          <p>Firebase</p>
        </div>
      </div>
    </div>
  )
}

export default Skills;