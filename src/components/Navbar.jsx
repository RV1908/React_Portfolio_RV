import logo from '../assets/RashmiVermaLogo.png'
import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'



const Navbar = () => {
  return (
    <nav className='mb-20 flex item-center justify-between py-6'>
        <div className='flex flex-shrink-0 item-center'>
          <a href='./'>
            <img className='mx-2 w-10' src={logo} alt="logo" />
          </a>
        </div>
        <div className='flex item-center justify-center gap-4 text-2xl'>
            <a href="https://www.linkedin.com/in/rashmi-verma-a2a901252/">
            <FaLinkedinIn />
            </a> 
            <a href='https://github.com/RV1908'>
            <FaGithub />
            </a>
            
        </div>
    </nav>
  )
}

export default Navbar
