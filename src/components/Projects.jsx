import React from "react";

const Projects = () => {
  return (
    <div
      name="projects"
      className="bg-[#0a192f] text-gray-300 w-full min-h-screen flex flex-col justify-center items-start"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center  h-full w-full">
        <div>
          <p class="text-4xl font-bold inline border-b-4 border-[#2ebfa5]">
            Projects
          </p>
          <p class="py-4 mt-8">Check out some of my recent work</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8"></div>
      </div>
    </div>
  );
};

export default Projects;
