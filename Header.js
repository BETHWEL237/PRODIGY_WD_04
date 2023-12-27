import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {BsGithub} from "react-icons/bs"
import {FaBars} from "react-icons/fa"
import {IoLogoLinkedin} from "react-icons/io"

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleClass = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="container mx-auto md:flex justify-between py-0 max-width">
      <div className="flex justify-between items-center py-2 md:py-14">
        <NavLink to="/">
        <a class="font-extrabold text-[23px] text-[#F5F7F8] hover:text-[red] " href='/'>Bethwel_dev™</a>
        </NavLink>
        <div onClick={toggleClass} className="cursor-pointer">
        <span class=" text-[white] hover:text-[yellow]  text-[26px] md:hidden"><FaBars/></span> 

        </div>
      </div>
      <nav className={` ${!isOpen ? "hidden" : null} text-center md:flex justify-between`}>
        <ul className="dark:text-light-content font-bold md:flex items-center md:space-x-5 md:mr-10 ">
          <li className="pb-1 md:pb-0  text-[red]  hover:text-[red]">
            <NavLink to="/" onClick={toggleClass}>
              Home
            </NavLink>
          </li>

          <li className="pb-1 t md:hidden text-[#F5F7F8]  md:pb-0 hover:text-[red]">
            <NavLink to="/about" onClick={toggleClass}>
             About
            </NavLink>
          </li>
          <li className="pb-1  text-[#F5F7F8]  md:pb-0 hover:text-[red]">
            <NavLink to="/projects" onClick={toggleClass}>
             Projects
            </NavLink>
          </li>
          <li className="pb-1  text-[#F5F7F8]  md:pb-0 hover:text-[red]">
            <NavLink to="/contact" onClick={toggleClass}>
              Contact
            </NavLink>
          </li>
          
            
        </ul>
        <ul className="flex justify-evenly items-center my-5 md:my-0 md:space-x-5 md:mr-5">
         
          <li>
            <a href='https://www.linkedin.com/in/bethwel-njenga-086430252/' target="_blank" rel="noreferrer noopener">
            <span class="hover:text-[yellow] text-[white] text-[28px]"><IoLogoLinkedin/></span> 

            </a>
          </li>
          <li>
            <a href="https://github.com/bethwel-developer" target="_blank" rel="noreferrer noopener">
            <span class=" text-[white] hover:text-[yellow]  text-[26px]"><BsGithub/></span> 
            </a>
          </li>
        </ul>

      </nav>
    </header>
    
  );
}

export default Header;
