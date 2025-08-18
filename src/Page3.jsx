import React from "react";
import ai from "./assets/Ai.svg";
import health from "./assets/health.svg";

const Page3 = () => {
  return (
    <div className="bg-black">
      <h1 className="text-white px-6 py-5 text-2xl md:text-3xl">Projects</h1>

      <div className="flex flex-col md:flex-row items-center justify-around gap-6 px-6 pb-10">
        
        <a 
          href="https://github.com/VishalDeval/Web_LLM_Model" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#eaeae8] h-[220px] h-auto w-full md:w-[35%] flex flex-col rounded-3xl hover:scale-105 p-4 duration-200 cursor-pointer"
        >
          <div className="flex items-start gap-3">
            <img
              src={ai}
              className="w-10 md:w-14"
              alt="LLM Model"
            />
          </div>
          <h3 className="font-[india] text-6xl md:text-7xl lg:text-7xl mt-auto">
            Web LLM Model
          </h3>
          <p className="text-gray-700 font-[china] text-sm md:text-base mt-2">
            A browser-based LLM that runs entirely on the client (no backend required),
            enabling chat, summarization, and prompt tools with privacy-friendly, low-latency inference.
          </p>
        </a>

        <a 
          href="https://github.com/VishalDeval/devXhack_AMUHACK4.0" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#223cf5] h-[220px] md:h-auto w-full md:w-[35%] flex flex-col rounded-3xl hover:scale-105 p-4 duration-200 cursor-pointer"
        >
          <div className="flex items-start gap-3">
            <img
              src={health}
              className="invert w-10 md:w-14"
              alt="Healthmate AI"
            />
          </div>
          <h3 className="font-[india] text-white text-6xl md:text-6xl lg:text-7xl mt-auto">
            Healthmate AI
          </h3>
          <p className="text-gray-200 text-sm font-[china] md:text-base mt-2">
            An AI health assistant that generates personalized diet charts, answers medical queries,
            and helps locate nearby hospitals and pharmacies.
          </p>
        </a>

      </div>
    </div>
  );
};

export default Page3;
