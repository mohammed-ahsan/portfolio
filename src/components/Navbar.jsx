import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaDiscord } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import logo from "../assets/logo.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div name='navbar' className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0d2614] text-gray-300 shadow-md z-10 ">
      <div>
        <img src={logo} alt="logo" style={{ width: "90px" }} />
      </div>
      {/*nav-menu*/}

      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>My-Stack</li>
        <li>Blogs</li>
        <li>Contact</li>
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
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">My-Stack</li>
        <li className="py-6 text-4xl">Blogs</li>
        <li className="py-6 text-4xl">Contact</li>
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
              <FaGithub size={30} />
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
