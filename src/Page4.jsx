import React from "react";

const Page4 = () => {
  return (
    <div id="about" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 w-full p-6">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Experience</h2>
        <div className="space-y-4">
          <div className="bg-[#eaeae8] rounded-2xl p-4 shadow-sm border">
            <span className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full">
              Sep 2025 - Present
            </span>
            <h3 className="font-semibold mt-2 text-lg">Google Campus Ambassador </h3>
            <p className="text-sm text-gray-600 font-[china]">
              Promoted Google tools and programs on campus, organized workshops, and built student engagement while strengthening leadership and communication skills.
            </p>
          </div>
          <div className="bg-[#eaeae8] rounded-2xl p-4 shadow-sm border">
            <span className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full">
              JUL 2024 - Aug 2024
            </span>
            <h3 className="font-semibold mt-2 text-lg">
              Web Developer Intern (At Codsoft)
            </h3>
            <p className="text-sm text-gray-600 font-[china]">
              Built eCommerce website, landing pages, and portfolio projects using MERN & GSAP.
            </p>
          </div>

          <div className="bg-[#eaeae8] rounded-2xl p-4 shadow-sm border">
            <span className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full">
              April 2025
            </span>
            <h3 className="font-semibold mt-2 text-lg">AMUHacks 4.0 (Hackathon)</h3>
            <p className="text-sm text-gray-600 font-[china]">
              Created HealthMate AI (diet chart generator, hospital finder, symptom checker).
            </p>
          </div>

          <div className="bg-[#eaeae8] rounded-2xl p-4 shadow-sm border">
            <span className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full">
              2024 - 2025
            </span>
            <h3 className="font-semibold mt-2 text-lg">Video Editor – AMU Roboclub</h3>
            <p className="text-sm text-gray-600 font-[china]">
              Produced videos for events & projects, boosting online presence & engagement.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Expertise</h2>
        <p className="text-sm text-gray-700 mb-4 font-[china]">
          Full-stack Web Development, Frontend Animations, Video Editing, AI Integration
        </p>

        <h3 className="font-semibold text-xl md:text-3xl mb-2">Hard Skills</h3>
        <div className="bg-black rounded-2xl p-2 pb-3 pt-0 mb-4">
          <img
            src="https://i.pinimg.com/736x/af/10/4f/af104f3af5c960550522ea730b37b507.jpg"
            alt="skills"
            className="w-full h-105 md:h-85 mt-0 pt-0 object-cover rounded-2xl"
          />
          <div className="flex justify-center gap-2 mt-2 flex-wrap">
            <span className="bg-orange-500 text-white px-2 py-1 text-xs rounded-full">JavaScript</span>
            <span className="bg-blue-500 text-white px-2 py-1 text-xs rounded-full">Python</span>
            <span className="bg-pink-500 text-white px-2 py-1 text-xs rounded-full">SQL</span>
            <span className="bg-red-500 text-white px-2 py-1 text-xs rounded-full">React</span>
            <span className="bg-green-500 text-white px-2 py-1 text-xs rounded-full">Node.js</span>
            <span className="bg-purple-500 text-white px-2 py-1 text-xs rounded-full">MongoDB</span>
            <span className="bg-yellow-500 text-white px-2 py-1 text-xs rounded-full">Express</span>
            <span className="bg-gray-500 text-white px-2 py-1 text-xs rounded-full">GSAP</span>
          </div>
        </div>

        <h3 className="font-semibold text-xl md:text-3xl mb-2">Soft Skills</h3>
        <div className="flex flex-wrap gap-2">
          <span className="bg-blue-200 text-blue-800 px-3 py-1 text-base rounded-full">Creativity</span>
          <span className="bg-gray-200 text-gray-800 px-3 py-1 text-base rounded-full">Teamwork</span>
          <span className="bg-gray-200 text-gray-800 px-3 py-1 text-base rounded-full">Time Management</span>
          <span className="bg-gray-200 text-gray-800 px-3 py-1 text-base rounded-full">Problem-Solving</span>
          <span className="bg-blue-200 text-blue-800 px-3 py-1 text-base rounded-full">Communication</span>
        </div>
      </div>

      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Education</h2>
        <div className="space-y-4">
          <div className="bg-black text-white rounded-2xl p-4">
            <span className="text-xs">2023 - 2027</span>
            <h3 className="font-semibold text-lg">
              B.Tech  <br />
              <span className="text-gray-400 text-sm font-[china]">
                Zakir Hussain College of Engineering & Technology, AMU <br /> (CGPA: 8.07)
              </span>
            </h3>
            <hr></hr>
          </div>

          <div className="bg-black text-white rounded-2xl p-4">
            <span className="text-xs">2021 - 2022</span>
            <h3 className="font-semibold text-lg">
              Intermediate (PCM) <br />
              <span className="text-gray-400 text-sm font-[china]">
                Bal Vidya Mandir Sr. Sec. School <br /> 92.4%
              </span>
            </h3>
            <hr></hr>
          </div>

          <div className="bg-black text-white rounded-2xl p-4">
            <span className="text-xs">2019 - 2020</span>
            <h3 className="font-semibold">
              High School <br />
              <span className="text-gray-400 text-sm font-[china] text-lg">
                Bal Vidya Mandir Sr. Sec. School <br /> 88.6%
              </span>
            </h3>
            <hr></hr>
          </div>
          
        </div>
      </div>
      
      
    </div>
  );
};

export default Page4;
