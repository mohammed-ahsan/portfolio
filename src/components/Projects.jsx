import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import ScrollToTop from "react-scroll-to-top";

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

  return (
    <div name="Projects" className="bg-[#0d2614] w-full h-full">
      <ScrollToTop color="#0d2614"  smooth viewBox="0 0 206 256" />
      {/*container*/}
      <div className="flex flex-col md:pt-[7.5%] pt-[15%] w-[95%] mx-auto">
        <p className="py-[8px] text-center text-xl text-[#FFEAD7]">
          My Projects
        </p>
        {/*tabs*/}
        <div className="m-auto p-[2.5px] w-fit flex flex-row gap-0.5 content-center   shadow-md shadow-[#b6a698] rounded-lg bg-gray-700  ">
          <div className="duration-300 bg-gradient-to-r rounded-lg  hover:scale-125 hover:bg-gradient-to-r from-[#8b8574] to-[#FFEAD7]">
            {!proj ? (
              <div>
                <button
                  onClick={handleClick}
                  className="text-gray-700 font-semibold p-[7px] hover:p-[5.5px] hover:text-gray-700 h-full hover:font-bold hover:uppercase"
                >
                  React
                </button>
              </div>
            ) : (
              <div className="duration-300 w-full h-full rounded-lg hover:scale-100 scale-125 bg-gradient-to-r from-[#8b8574] to-[#FFEAD7]">
                <button className=" text-gray-700 font-bold uppercase p-[5.5px]">
                  React
                </button>
              </div>
            )}
          </div>
          <div className="duration-300 bg-gradient-to-r rounded-lg  hover:scale-125 hover:bg-gradient-to-r from-[#8b8574] to-[#FFEAD7] ">
            {!proj1 ? (
              <div>
                <button
                  onClick={handleClick1}
                  className="text-gray-700 font-semibold p-[7px] hover:p-[5.5px] hover:text-gray-700 h-full hover:font-bold hover:uppercase"
                >
                  NextJS
                </button>
              </div>
            ) : (
              <div className="duration-300 w-full h-full rounded-lg hover:scale-100 scale-125 bg-gradient-to-r from-[#8b8574] to-[#FFEAD7]">
                <button className=" text-gray-700 p-[5.5px] font-bold uppercase">
                  NextJS
                </button>
              </div>
            )}
          </div>

          <div className="duration-300 bg-gradient-to-r    rounded-lg  hover:scale-125 hover:bg-gradient-to-r from-[#8b8574] to-[#FFEAD7] ">
            {!proj2 ? (
              <button
                onClick={handleClick2}
                className="text-gray-700 font-semibold p-[7px] hover:p-[5.5px] hover:text-gray-700 h-full hover:font-bold hover:uppercase"
              >
                React Native
              </button>
            ) : (
              <div className="duration-300 w-full h-full rounded-lg hover:scale-100 scale-125 bg-gradient-to-r from-[#8b8574] to-[#FFEAD7]">
                <button className=" text-gray-700 p-[5.5px] font-bold uppercase">
                  React Native
                </button>
              </div>
            )}
          </div>
        </div>
        {/*swiper-slides*/}
        <div className=" h-full md:w-[750px] w-[95%] mx-auto mb-[50px]">
          <div className=" text-auto ] my-[20px] h-full w-full mx-auto">
            {/* slider-container-react*/}
            {proj ? (
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: true,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper1 rounded-t-lg"
              >
                <SwiperSlide >
                  <div className="flex flex-col">
                    <img name="slide" className="rounded-b-lg" src={Project1} alt="Project_image" />
                    <div className="flex md:flex-row gap-1 flex-col  md:w-[50%] h-[50%] p-2 border-2 bg-gradient-to-br from-[#8b8574] to-[#FFEAD7] rounded-xl m-auto">
                      <div className=" md:w-[50%] ">
                        
                        <p className="border-b-2 text-md md:w-auto w-fit mx-auto font-semibold text-gray-700">
                          Portfolio
                        </p>
                        <p className="text-sm text-gray-600">Stack:React, sanity.io</p>
                      </div>
                      <button className="right-0 font-semibold mx-auto  border-2 p-2 md:p-4 rounded-full bg-gray-300 hover:bg-gray-400 duration-300 my-auto">
                        Live
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col">
                    <img name="slide" className="rounded-b-lg" src={Project2} alt="Project_image" />
                    <div className="flex md:flex-row gap-1 flex-col  md:w-[50%] h-[50%] p-2 border-2 bg-gradient-to-br from-[#8b8574] to-[#FFEAD7] rounded-xl m-auto">
                      <div className=" md:w-[50%] ">
                        
                        <p className="border-b-2 text-md md:w-auto w-fit mx-auto font-semibold text-gray-700">
                          Portfolio
                        </p>
                        <p className="text-sm text-gray-600">Stack:React</p>
                      </div>
                      <button className="right-0 font-semibold mx-auto border-2 p-2 md:p-4 rounded-full bg-gray-300 hover:bg-gray-400 duration-300 my-auto">
                        Live
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            ) : (
              <div></div>
            )}

            {/*slider-container-NextJS*/}
            {proj1 ? (
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: true,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper2 rounded-t-lg"
              >
                <SwiperSlide>
                  <div className="flex flex-col">
                    <img name="slide" className="rounded-b-lg" src={Project1} alt="Project_image" />
                    <div className="flex md:flex-row gap-1 flex-col  md:w-[50%] h-[50%] p-2 border-2 bg-gradient-to-br from-[#8b8574] to-[#FFEAD7] rounded-xl m-auto">
                      <div className=" md:w-[50%] ">
                        
                        <p className="border-b-2 text-md md:w-auto w-fit mx-auto font-semibold text-gray-700">
                          Portfolio
                        </p>
                        <p className="text-sm text-gray-600">Stack:React</p>
                      </div>
                      <button className="right-0 font-semibold mx-auto border-2 p-2 md:p-4 rounded-full bg-gray-300 hover:bg-gray-400 duration-300 my-auto">
                        Live
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col">
                    <img name="slide" className="rounded-b-lg" src={Project3} alt="Project_image" />
                    <div className="flex md:flex-row gap-1 flex-col  md:w-[50%] h-[50%] p-2 border-2 bg-gradient-to-br from-[#8b8574] to-[#FFEAD7] rounded-xl m-auto">
                      <div className=" md:w-[50%] ">
                        
                        <p className="border-b-2 text-md md:w-auto w-fit mx-auto font-semibold text-gray-700">
                          Portfolio
                        </p>
                        <p className="text-sm text-gray-600">Stack:React</p>
                      </div>
                      <button className="right-0 font-semibold mx-auto border-2 p-2 md:p-4 rounded-full bg-gray-300 hover:bg-gray-400 duration-300 my-auto">
                        Live
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            ) : (
              <div></div>
            )}
            {/*slider-container-react-native*/}
            {proj2 ? (
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: true,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper3 rounded-t-lg"
              >
                <SwiperSlide>
                  <div className="flex flex-col">
                    <img name="slide" className="rounded-b-lg" src={Project3} alt="Project_image" />
                    <div className="flex md:flex-row gap-1 flex-col  md:w-[50%] h-[50%] p-2 border-2 bg-gradient-to-br from-[#8b8574] to-[#FFEAD7] rounded-xl m-auto">
                      <div className=" md:w-[50%] ">
                        
                        <p className="border-b-2 text-md md:w-auto w-fit mx-auto font-semibold text-gray-700">
                          Portfolio
                        </p>
                        <p className="text-sm text-gray-600">Stack:React</p>
                      </div>
                      <button className="right-0 font-semibold mx-auto border-2 p-2 md:p-4 rounded-full bg-gray-300 hover:bg-gray-400 duration-300 my-auto">
                        Live
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            ) : (
              <div></div>
            )}
          </div>
        </div>
        {/*project-goals*/}
        
        <div className="parent w-[70%] mx-auto grid grid-cols-6 gap-4 mb-[100px]">
  <div className="child-1 rounded-t-lg duration-300 col-start-2 col-span-4 bg-gray-700 hover:bg-gray-900 p-3 border-2 border-[#8b8574] "><div className="text-[#e5dcc2] font-medium w-fit mx-auto">Clean & Optimized Code</div></div>
  <div className="child-2 rounded-l-lg duration-300 col-start-1 col-end-3 bg-gray-700 hover:bg-gray-900 p-3 border-2 border-[#8b8574]"><div className="text-[#e5dcc2] font-medium w-fit mx-auto">Lesser Bugs</div></div>
<div className="m-auto col-start-3 col-span-2"> <div className="font-semibold text-[#e5dcc2] border-b-2 border-gray-500 ">PROJECT GOALS</div></div>
  <div className="child-3 rounded-r-lg  duration-300 col-end-7 col-span-2 bg-gray-700 hover:bg-gray-900 p-3 border-2 border-[#8b8574]"><div className="text-[#e5dcc2] font-medium w-fit mx-auto">Better SEO</div></div>
  <div className="child-4 rounded-b-lg   duration-300 col-start-1 col-end-7 bg-gray-700 hover:bg-gray-900 p-3 border-2 border-[#8b8574]"><div className="text-[#e5dcc2] font-medium w-fit mx-auto">High Performance & ReUsable</div></div>
</div>
        
      </div>

    </div>
  );
};

export default Projects;
