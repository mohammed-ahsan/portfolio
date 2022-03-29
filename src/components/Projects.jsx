import React, { useState } from "react";

import "./styles.scss";

import Project1 from "../assets/project1.png";
import Project2 from "../assets/project2.png";
import Project3 from "../assets/project3.png";



const Projects = () => {
  

  const [proj, setproj] = useState(true);

  const [proj1, setproj1] = useState(false);
  const [proj2, setproj2] = useState(false);

  const handleClick = () => {
    setproj(!proj);
    setproj1(false);
    setproj2(false);
    handleClick_image_1();
  };

  const handleClick1 = () => {
    setproj1(!proj1);
    setproj(false);
    setproj2(false);
  };
  const handleClick2 = () => {
    setproj2(!proj2);
    setproj1(false);
    setproj(false);
  };
  const handleClick_image_1 = () => {
    let i = 0; 		
    let images = [];	
    let time = 3000;
    
      // Image List
      images[0] = Project1;
      images[1] = Project2;
      images[2] = Project3;
    
      const changeimg = () => {
        document.slide.src = images[i];
    
        if (i < images.length - 1) {
          i++;
        } else {
          i = 0;
        }
    
        setTimeout(changeimg, time);
      };
    
      window.onload = changeimg;
    };

  const prevClick = () => {};
  const nextClick = () => {};

  // Change Image

  return (
    <div name="Projects" className="bg-[#0d2614] w-full h-full">
      {/*container*/}
      <div className="flex flex-col w-full px-[2%] pt-[100px] ">
        <p className="py-[8px] text-center text-xl text-[#FFEAD7]">
          My Projects
        </p>
        <div className="m-auto p-[1px] flex flex-row justify-items-center   shadow-md shadow-[#FFEAD7] rounded-lg bg-white  ">
          <div className="duration-300 bg-green-900 mx-[.5%]   rounded-lg  hover:scale-125 hover:bg-gradient-to-r from-[#8b8574] to-[#FFEAD7] ">
            {!proj ? (
              <button
                onClick={handleClick}
                className="text-white hover:text-green-900 h-full hover:font-bold hover:uppercase"
              >
                React
              </button>
            ) : (
              <div className="duration-300 w-full h-full rounded-lg hover:scale-100 scale-125 bg-gradient-to-r from-[#8b8574] to-[#FFEAD7]">
                <button className=" text-green-900 font-bold uppercase">
                  React
                </button>
              </div>
            )}
          </div>
          <div className="duration-300 bg-green-900 mx-[.5%]   rounded-lg  hover:scale-125 hover:bg-gradient-to-r from-[#8b8574] to-[#FFEAD7] ">
            {!proj1 ? (
              <div>
                <button
                  onClick={handleClick1}
                  className="text-white hover:text-green-900 h-full hover:font-bold hover:uppercase"
                >
                  NextJS
                </button>
              </div>
            ) : (
              <div className="duration-300 w-full h-full rounded-lg hover:scale-100 scale-125 bg-gradient-to-r from-[#8b8574] to-[#FFEAD7]">
                <button className=" text-green-900 font-bold uppercase pt-[12.5px]">
                  NextJS
                </button>
              </div>
            )}
          </div>

          <div className="duration-300 bg-green-900 mx-[.5%]   rounded-lg  hover:scale-125 hover:bg-gradient-to-r from-[#8b8574] to-[#FFEAD7] ">
            {!proj2 ? (
              <button
                onClick={handleClick2}
                className="text-white hover:text-green-900 h-full hover:font-bold hover:uppercase"
              >
                React Native
              </button>
            ) : (
              <div className="duration-300 w-full h-full rounded-lg hover:scale-100 scale-125 bg-gradient-to-r from-[#8b8574] to-[#FFEAD7]">
                <button className=" text-green-900 font-bold uppercase">
                  React Native
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="border-2 h-full md:w-[750px] w-[95%] mx-auto">
          <div className="border-2 border-[#FF0000] my-[20px] h-[200px] w-full mx-auto">
            {/* slider-container-react*/}
            {proj ? <img name="slide" alt="Project_image" /> : <div></div>}

            {/*slider-container-NextJS
            {proj1 ? (
              
            ) : (
              <div>

              </div>
            )}
            {/*slider-container-react-native
            {proj2 ? (
              
            ) : (
              <div>

              </div>
            )}
          </div>
         */}
          </div>
          {/*navigation-button*/}
          <button
            onClick={prevClick}
            className="h-[100px] w-[200px] bg-white border-2 border-black"
          >
            prev
          </button>
          <button
            onClick={nextClick}
            className="h-[100px] w-[200px] bg-white border-2 border-black"
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
