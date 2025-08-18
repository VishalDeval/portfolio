import React from "react";
import mail from "./assets/mail.svg";
import linkedin from "./assets/linkedin.svg";
import github from "./assets/github.svg";

const Page2 = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around mb-10 h-auto gap-6 p-6">
      {/* Profile Image */}
      <div className="bg-[#1c1c1c] w-full md:w-[30%] h-[280px] md:h-[70vh] rounded-4xl flex justify-center items-center overflow-hidden">
        <img
          className="object-cover w-full h-full"
          src="https://i.pinimg.com/736x/7e/7a/1b/7e7a1b3149e640e1f3c4e950999d5285.jpg"
          alt="profile"
        />
      </div>

      {/* Right Section */}
      <div className="w-full md:w-[65%] flex flex-col gap-6 text-xl md:text-2xl">
        <h2 className="text-2xl md:text-3xl font-bold">Introduction</h2>
        <div className="border rounded-2xl p-6 text-base md:text-lg leading-relaxed">
          <h5 className="font-semibold mb-2">A Web Developer</h5>
          <p className="font-[china] text-gray-700">
            I thrive in combining technical expertise (JavaScript, Python,
            React, Node.js, MongoDB, GSAP) with creative problem-solving and
            design, making me versatile across frontend, backend, and media
            production. My work reflects a balance of functionality,
            performance, and creativity, and I’m always eager to learn,
            collaborate, and push boundaries in technology and design.
          </p>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="text-xl md:text-2xl mb-4">Get In Touch</h4>
          <div className="flex flex-col flex-wrap md:flex-row gap-6 w-full">
            {/* Mail */}
            <a
              href="mailto:vishaldeval098@gmail.com?subject=Hello Vishal&body=I wanted to connect with you."
              className="flex-1 bg-black border flex items-center justify-center gap-4 rounded-2xl p-6 hover:scale-105 duration-200"
            >
              <img src={mail} className="invert w-7 md:w-8" alt="mail" />
              <h3 className="font-[china] text-white text-base md:text-lg break-words">
                vishaldeval098@gmail.com
              </h3>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/vishal-deval-0a1283296"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[#223cf5] flex items-center justify-center gap-4 rounded-2xl p-6 hover:scale-105 duration-200"
            >
              <img
                src={linkedin}
                className="invert w-7 md:w-8"
                alt="linkedin"
              />
              <h3 className="font-[china] text-white text-base md:text-lg">
                Vishal Deval
              </h3>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/VishalDeval"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 border flex items-center justify-center gap-4 rounded-2xl p-6 hover:scale-105 duration-200"
            >
              <img src={github} className="invert w-7 md:w-8" alt="github" />
              <h3 className="font-[china] text-base md:text-lg">VishalDeval</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
