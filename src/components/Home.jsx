import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import mypaint from "../assets/mypaint.png";
import "./styles.scss";
import { Link } from "react-scroll";
import Projects from "./Projects";
export const Home = () => {
  return (
    <div name="home" className="w-full h-screen  bg-[#0d2614] ">
      {/*container*/}
      <div className=" w-[90%] mx-auto flex md:flex-row place-content-center  flex-col   h-full md:pt-[100px] ">
        <div className="flex h-full flex-col md:pb-[100px] md:pt-[0px] pt-[20%]  md:w-[50%] place-content-center ">
          <div className="mx-auto w-[250px]  ">
            <img className="rounded-full" src={mypaint} alt="Me" />
          </div>
          <div className="py-3  md:pt-8 text-center">
            <p className="text-[#FFEAD7] md:pt-4">Hi, my name is</p>
            <h1 className="text-4xl sw:text-7xl font-bold md:pt-4 ">
              Mohammed Ahsan
            </h1>
            <h2 className="tracking-widest font-bold text-[#FFEAD7] md:pt-4  ">
              I'm a Full Stack Developer
            </h2>
            <p className="text-[#cfddda] md:pt-4">
              I'm currently focused on learning new technologies and sharpening
              my skills
            </p>
          </div>
        </div>
        <div className="h-[80%] md:w-[50%] w-full relative m-auto  flex flex-col items-center">
          <div className="content flex   w-[70%] relative  cursor-auto  items-center">
            <div className="content__container mx-auto  border-2 border-gray-500 rounded-xl relative  text-white ">
              <p className="content__container__text">Hello</p>

              <ul className="content__container__list relative">
                <li className="content__container__list__item">world!</li>

                <li className="content__container__list__item">everybody!</li>
              </ul>
            </div>
          </div>

          
            <Link className="text-white cursor-pointer rounded-2xl h-[30%] m-auto group border-2 border-[#8b8574]  flex items-center hover:bg-[#8b8574] duration-300  py-8 px-14 hover:-translate-y-5  " to="Projects" spy={true} smooth={true}>
              <p className="">Explore Projects</p>
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </Link>
          
        </div>
      </div>
    </div>
  );
};
export default Home;
