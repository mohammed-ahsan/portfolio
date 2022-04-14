import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaDiscord } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
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
        <li> <Link to="/">Home</Link> </li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/MyStack">My-Stack</Link></li>
        <li><Link to="/Blogs">Blogs</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
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
        <li onClick={handleClick} className="py-6 text-4xl"><Link to="/">Home</Link> </li>
        <li onClick={handleClick} className="py-6 text-4xl"><Link to="/About">About</Link></li>
        <li onClick={handleClick} className="py-6 text-4xl"><Link to="/MyStack">My-Stack</Link></li>
        <li onClick={handleClick} className="py-6 text-4xl"><Link to="/Blogs">Blogs</Link></li>
        <li onClick={handleClick} className="py-6 text-4xl"><Link to="/Contact">Contact</Link></li>
      </ul>

      {/*social-icons*/}
      <div className="fixed  bottom-0 left-0">
        <ul className="flex z-1000 md:flex-col md:h-screen place-content-center md:w-full w-screen">
          <li className="md:w-[160px] w-screen h-[60px] flex justify-between items-center md:ml-[-100px] md:hover:ml-[-10px] duration-300 bg-[#040a21]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Github
              <FaGithub size={30}/>
            </a>
          </li>
          <li className="md:w-[160px] w-screen h-[60px] flex justify-between items-center md:ml-[-100px] md:hover:ml-[-10px] duration-300 bg-[#7289DA]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Discord
              <FaDiscord size={30} />
            </a>
          </li>
          <li className="md:w-[160px] w-screen h-[60px] flex justify-between items-center md:ml-[-100px] md:hover:ml-[-10px] duration-300 bg-[#413395]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Mail
              <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
