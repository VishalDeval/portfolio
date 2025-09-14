import React from "react";

import meImage from "./assets/me.png";

const Front = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full my-20 p-0 gap-0 h-auto bg-gray-300">
        <div className="text-xl text-[#6d6d6d]">
          👋, I'm Vishal & I am a <br />
          <div className="relative flex flex-col ">
            <div className="font-[india] text-[50vw] md:text-[30vw] m-0 p-0 leading-none text-black">
              FULLSTACK
            </div>

            <div className=" self-end text-xl leading-none font-[pak]  px-4 py-1 rounded-md">
              Webdeveloper
            </div>
          </div>
          <div className="text-lg leading-none font-[china] text-[#0733f4]">
            based in India
          </div>
        </div>

        <img src={meImage} className="absolute xl:opacity-[95%] h-24 bottom-82 opacity-0 md:h-74 md:bottom-12" />
      </div>

      <div className="bg-black text-white font-[china] rounded-xl flex justify-end items-center h-10 my-10 absolute bottom-0 right-0 px-10 hover:text-black hover:bg-white duration-600">
        Scroll For More
      </div>
    </>
  );
};

export default Front;
