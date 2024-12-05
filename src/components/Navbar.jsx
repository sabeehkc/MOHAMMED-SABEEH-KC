import React from 'react'
import logo from '../assets/SabeehLogotr.png'
import {FaGithub, FaInstagram, FaLinkedin, FaYoutube} from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <a href="/" aria-label='Home'>
                <img src={logo}  className='mx-2 wid' width={100} height={33} alt='Logo' />
            </a>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href="https://www.linkedin.com/in/sabeeh-kc/" 
                target='_blank' 
                rel='noopener noreferrer'
                aria-label='LinkedIn'>
                    <FaLinkedin />
            </a>
            <a href="https://github.com/sabeehkc" 
                target='_blank' 
                rel='noopener noreferrer'
                aria-label='GitHub'>
                    <FaGithub />
            </a>
            <a href="https://www.instagram.com/_sabeeh__kc/" 
                target='_blank' 
                rel='noopener noreferrer'
                aria-label='Instagram'>
                    <FaInstagram />
            </a>
            <a href="https://www.youtube.com/@saabcoders" 
                target='_blank' 
                rel='noopener noreferrer'
                aria-label='YouTube'>
                    <FaYoutube />
            </a>
        </div>
    </nav>
  )
}

export default Navbar
