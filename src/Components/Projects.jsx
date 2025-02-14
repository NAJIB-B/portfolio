import React from 'react';
import Project from './Project.jsx';
import '../styles/Projects.css';

const Projects = () => {
  const projectsInfo = [
     {
      name: 'Meta bnb',
      desc: 'Created a visually immersive frontend for a virtual metaverse, focused on aesthetics and user experience, featuring interactive elements and dynamic environments',
      liveLink: 'https://najib-metabnb.netlify.app/',
      githubLink: 'https://github.com/NAJIB-B/metabnb',
      techs: ['React', 'tailwind Css'],
      isOpenSource: false
    },
    {
      name: 'Readvisory',
      desc: 'Developed a responsive real estate website for a client, featuring optimized SEO to increase visibility and attract target audience traffic',
      liveLink: 'https://www.readvisory.ng/',
      githubLink: 'https://github.com/NAJIB-B/readvisory',
      techs: ['Next', 'tailwind Css', 'SEO'],
      isOpenSource: false
    },
     {
      name: 'Music App',
      desc: 'Developed a music player app with an intuitive interface, allowing users to play, pause, and skip tracks, enhancing the overall listening experience',
      liveLink: 'https://najib-music-app.netlify.app/',
      githubLink: 'https://github.com/NAJIB-B/music-player-app',
      techs: ['Typescript', 'React', 'tailwind Css'],
      isOpenSource: false
    },
      {
      name: 'Najib quiz',
      desc: 'A simple quiz app that can be utilized by small schools for testing students, You can set your quiz and share your quiz link with friends',
      liveLink: 'https://master.d2jlldhnm1hiur.amplifyapp.com/',
      githubLink: 'https://github.com/NAJIB-B/najibquiz',
      techs: ['TypeScript', 'React', 'styled-components', 'Firebase',  'Redux'],
      isOpenSource: false
    },
     {
      name: 'Memory game',
      desc: 'A simple memory game that test your memory strength and eye sight speed and is also fun. Hurry up and level up',
      liveLink: 'https://memory-game-najib.netlify.app/',
      githubLink: 'https://github.com/NAJIB-B/memory-game-react',
      techs: ['React', 'Redux', 'Firebase', 'styled-components'],
      isOpenSource: false
    },
    {
     name: 'ADHD QUIZ APP',
     desc: "This app tells you what ADHD is and provides you with a quiz to check if you likely have ADHD or not",
     liveLink: 'https://adhd-quiz.netlify.app/',
     githubLink: 'https://github.com/Azeez-Ismaila/adhd-quiz',
     techs: ['Tailwind', 'React', 'contex Api'],
     isOpenSource: false
   },
     {
      name: 'FinTrakr',
      desc: 'A landing page for is a virtual app that help you track and organize your activities',
      liveLink: 'https://najib-b.github.io/finTrakr/',
      githubLink: 'https://github.com/NAJIB-B/finTrakr',
      techs: ['HTML', 'CSS', 'Bootstrap 5'],
      isOpenSource: false
    },
    {
      name: 'TIC TAC TOE',
      desc: "It's a classic tic-tac-toe game made with JavaScript, fun to play when together with friends. From this moment you don't have to waste your ink anymore",
      liveLink: 'https://najib-b.github.io/tic-tac-toe/',
      githubLink: 'https://github.com/NAJIB-B/tic-tac-toe',
      techs: ['HTML', 'CSS', 'Javascript'],
      isOpenSource: false
    },
  ]
  return (
    <div className="Projects" id="projects" >
      <h2>My Projects</h2>
      <div>
        {projectsInfo.map((project, index)=>{
          return(

            <Project info={project} key={index}></Project>
          )
        })}
      </div>
    </div>
  )
}

export default Projects;
