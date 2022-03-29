import React from "react";
const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0d2614] ">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl text-white font-bold inline border-b-4 border-[#a5946c]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p className="text-[#FFEAD7]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius,
              recusandae.
            </p>
          </div>
          <div>
            <p className="text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
              cumque possimus magni ipsum obcaecati officiis aspernatur quis,
              eligendi quas repudiandae esse dolorum facilis, asperiores, quia
              quae adipisci ipsa mollitia suscipit accusamus similique deleniti
              at nihil. Possimus sunt dolorum facilis aspernatur doloremque,
              magnam dolor quam hic tenetur error blanditiis pariatur sint!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
