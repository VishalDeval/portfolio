import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-8 py-4 shadow-sm relative z-50">
      <div className="font-[china] text-4xl">Portfolio</div>


      <div className="hidden md:flex items-center gap-6 text-sm text-gray-700">
        <a href="https://drive.google.com/file/d/1RjgJNze9TWEcXkhHsZZ0iqpLFZ8Dlp5m/view?usp=sharing" className="text-base hover:text-black">Resume</a>
        <a href="#projects" className="text-base hover:text-black">Projects</a>
        <a href="#about" className="text-base hover:text-black">About</a>
        <a
          href="mailto:vishaldeval098@gmail.com?subject=Hello Vishal&body=I wanted to connect with you." 
          className="ml-6 px-4 py-2 bg-black text-white rounded-md text-sm hover:scale-[105%] ease-in duration-100 font-[china]"
        >
          vishaldeval098@gmail.com
        </a>
      </div>

      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)} // close when clicking outside
        ></div>
      )}


      {isOpen && (
        <div className="absolute top-16 left-0 w-full rounded-2xl bg-white shadow-md flex flex-col items-center gap-4 py-6 text-gray-700 md:hidden z-50">
          <a href="https://drive.google.com/file/d/1RjgJNze9TWEcXkhHsZZ0iqpLFZ8Dlp5m/view?usp=sharing" className="hover:text-black" onClick={() => setIsOpen(false)}>Resume</a>
          <a href="#photos" className="hover:text-black" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#about" className="hover:text-black" onClick={() => setIsOpen(false)}>About</a>
          <a
            href="mailto:vishaldeval098@gmail.com"
            className="px-4 py-2 bg-black text-white rounded-md text-sm hover:scale-[105%] ease-in duration-100 font-[china]"
            onClick={() => setIsOpen(false)}
          >
            vishaldeval098@gmail.com
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
