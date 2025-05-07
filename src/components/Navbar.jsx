import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="header">
        <NavLink to="/" className="w-12 h-12 rounded-lg  items-center justify-center flex font-bold ">
            <p className="blue-gradient_text">Home</p>
        </NavLink>
        <nav className="flex text-lg gap-7 font-medium">
            <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black hover:text-blue-500 transition-all duration-200'}>
                About
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black hover:text-blue-500 transition-all duration-200'}>
                Projects
            </NavLink>
            <NavLink to="/benford-law-research" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black hover:text-blue-500 transition-all duration-200'}>
                Blog
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar
