import React from 'react'

import { AiFillInstagram, AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai'

import '../styles/Socials.css';

const Socials = () => {
  return (
    <div className='socials'>
      <h2>Find Me @ The Web</h2>
      <div className="social">
      <div className='link'>
          <AiFillLinkedin />
          <p>Linkedin</p>
          <a href="https://www.linkedin.com/in/muhammad-najib-bala-92a343230/" target='_blank' rel='noreferrer'>Let's Connect</a>
        </div>
        
        <div className='git'>
          <AiFillGithub />
          <p>Github</p>
          <a href="https://github.com/NAJIB-B" target='_blank' rel='noreferrer'>Let's Connect</a>
        </div>
        <div className='twit'>
          <AiFillTwitterCircle />
          <p>Twitter</p>
          <a href="https://twitter.com/najib2557" target='_blank' rel='noreferrer'>Let's Connect</a>
        </div>
        <div className='insta'>
          <AiFillInstagram />
          <p>Instagram</p>
          <a href="https://www.instagram.com/muhd_najib_bala/" target='_blank' rel='noreferrer'>Let's Connect</a>
        </div>
      </div>
    </div>
  )
}

export default Socials