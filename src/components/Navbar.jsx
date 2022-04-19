import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";

import CustomLink from "./CustomLink.tsx";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";


export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div name='navbar' className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0d2614] text-gray-300 shadow-md z-10 opacity-0.3 ">
      <div>
      <Link className="w-full h-full" to="/"><img  src={logo} alt="logo" className="w-[90px]" ></img></Link>
      </div>
      {/*nav-menu*/}

      <ul className="hidden md:flex">
        <li><CustomLink to="/">Home</CustomLink> </li>
        <li><CustomLink to="/About">About</CustomLink></li>
        <li><CustomLink to="/MyStack">My-Stack</CustomLink></li>
        <li><CustomLink to="/Blogs">Blogs</CustomLink></li>
        <li><CustomLink to="/Contact">Contact</CustomLink></li>
      </ul>

      {/*hamburger*/}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/*mobile-menu*/}

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0d2614] flex flex-col justify-center items-center"
        }
      >
        <li onClick={handleClick} className="py-6 text-4xl"><CustomLink to="/">Home</CustomLink> </li>
        <li onClick={handleClick} className="py-6 text-4xl"><CustomLink to="/About">About</CustomLink></li>
        <li onClick={handleClick} className="py-6 text-4xl"><CustomLink to="/MyStack">My-Stack</CustomLink></li>
        <li onClick={handleClick} className="py-6 text-4xl"><CustomLink to="/Blogs">Blogs</CustomLink></li>
        <li onClick={handleClick} className="py-6 text-4xl"><CustomLink to="/Contact">Contact</CustomLink></li>
      </ul>

      {/*social-icons*/}
      <div className="fixed  bottom-0 left-0">
        <ul className="flex z-1000 md:flex-col md:h-screen place-content-center md:w-full w-screen">
        <li className="md:w-[160px] w-screen h-[60px] flex justify-between items-center md:ml-[-100px] md:hover:ml-[-10px] duration-300 bg-[#0e76a8]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/mohammed-a-883756b3/"
            >
              LinkedIn
              <FaLinkedin size={30}/>
            </a>
          </li>
          <li className="md:w-[160px] w-screen h-[60px] flex justify-between items-center md:ml-[-100px] md:hover:ml-[-10px] duration-300 bg-[#040a21]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/mohammed-ahsan"
            >
              Github
              <FaGithub size={30}/>
            </a>
          </li>
          <li className="md:w-[160px] w-screen h-[60px] flex justify-between items-center md:ml-[-100px] md:hover:ml-[-10px] duration-300 bg-[#8b4c1f]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://stackoverflow.com/users/9580288/mohammed-ahsan"
            >
              Stack Overflow
              <FaStackOverflow size={30} />
            </a>
          </li>
          
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
