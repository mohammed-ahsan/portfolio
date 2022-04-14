import React from "react";
import Nextjs from "../assets/nextjs.svg";
import Mongodb from "../assets/mongodb.svg";
import Tailwind from "../assets/tailwind.svg";
import Nodejs from "../assets/nodejs.svg";
import Expressjs from "../assets/expressjs.svg";

const MyStack = () => {
  return (
    <div name="mystack" className="flex flex-col w-full h-full md:h-screen lg:h-full py-20 bg-[#0d2614]">
      {/*container*/}
      <div className="w-[90%] h-[90%] m-auto">
        <div className="text-gray-300 w-full grid md:grid-cols-2 mx-auto  gap-4 text-center p-8 duration-500">
          <div className="p-4 md:w-[80%] m-auto text-2xl rounded-xl border-2 border-[#8b8574]  w-full">
            <p className="font-thin">
              These are the <br/><h2 className="tracking-widest font-semibold">[technologies]</h2> I've been learning and I'm very much enthusiastic in <h2 className="trackind-wider font-medium">Rust</h2> and <h2 className="trackind-wider font-medium">WebAssembly</h2> 
            </p>

          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="my-auto grid gap-4">
              <div className="rounded-xl p-4 shadow-md shadow-black bg-[#0f361a] hover:-translate-x-2 duration-500">
                <p>NextJS</p>
                <img className="w-[60%] mx-auto" src={Nextjs} />
              </div>
              <div className="rounded-xl p-4 shadow-md shadow-black bg-[#0f361a] hover:-translate-x-2 duration-500">
                <p>Tailwind</p>
                <img className="w-[60%] mx-auto" src={Tailwind} />
              </div>
            </div>
            <div className="grid gap-4">
              <div className="rounded-xl p-4 shadow-md shadow-black bg-[#0f361a] hover:translate-x-2 duration-500">
                <p>MongoDB</p>
                <img className="w-[60%] mx-auto" src={Mongodb} />
              </div>
              <div className="rounded-xl p-4 shadow-md shadow-black bg-[#0f361a] hover:translate-x-2 duration-500">
                <p>ExpressJS</p>
                <img className="w-[60%] mx-auto" src={Expressjs} />
              </div>
              <div className="rounded-xl p-4 shadow-md shadow-black bg-[#0f361a] hover:translate-x-2 duration-500">
                <p>NodeJS</p>
                <img className="w-[60%] mx-auto" src={Nodejs} />
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default MyStack;
