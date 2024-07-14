import React from "react";
import bootstrap from "../assets/images/bootstrap.png";
import csharp from "../assets/images/csharp.png";
import css from "../assets/images/css.png";
import dotNetCore from "../assets/images/dotnetcore.png";
import html from "../assets/images/html.png";
import javascript from "../assets/images/javascript.png";
import mySQL from "../assets/images/mysql.png";
import reactjs from "../assets/images/react.png";
import msSQLServer from "../assets/images/sqlserver.png";
import tailwindCss from "../assets/images/tailwind.png";

const Skills = () => {
  return (
    <div
      name="skills"
      className="bg-[#0a192f] text-gray-300 w-full min-h-screen flex flex-col justify-center items-start"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center  h-full w-full">
        <div>
          <p class="text-4xl font-bold inline border-b-4 border-[#2ebfa5]">
            Skills
          </p>
          <p class="py-4 mt-8">These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8">
          <div class="shadow-md shadow-[#040c16] hover:scale-110 duration-700">
            <img src={html} alt="html icon" className="w-20 mx-auto pt-4" />
            <p class="py-4">HTML</p>
          </div>
          <div class="shadow-md shadow-[#040c16] hover:scale-110 duration-700">
            <img src={css} alt="css icon" className="w-20 mx-auto pt-4" />
            <p class="py-4">CSS</p>
          </div>
          <div class="shadow-md shadow-[#040c16] hover:scale-110 duration-700">
            <img
              src={javascript}
              alt="javascript icon"
              className="w-20 mx-auto pt-4"
            />
            <p class="py-4">Javascript</p>
          </div>
          <div class="shadow-md shadow-[#040c16] hover:scale-110 duration-700">
            <img
              src={tailwindCss}
              alt="tailwind css icon"
              className="w-20 mx-auto pt-4"
            />
            <p class="py-4">Tailwind CSS</p>
          </div>
          <div class="shadow-md shadow-[#040c16] hover:scale-110 duration-700">
            <img
              src={bootstrap}
              alt="bootstrap icon"
              className="w-20 mx-auto pt-4"
            />
            <p class="py-4">Bootstrap</p>
          </div>
          <div class="shadow-md shadow-[#040c16] hover:scale-110 duration-700">
            <img
              src={reactjs}
              alt="react js icon"
              className="w-20 mx-auto pt-4"
            />
            <p class="py-4">React JS</p>
          </div>
          <div class="shadow-md shadow-[#040c16] hover:scale-110 duration-700">
            <img src={csharp} alt="c# icon" className="w-20 mx-auto pt-4" />
            <p class="py-4">C#</p>
          </div>
          <div class="shadow-md shadow-[#040c16] hover:scale-110 duration-700">
            <img
              src={dotNetCore}
              alt=".net core icon"
              className="w-20 mx-auto pt-4"
            />
            <p class="py-4">.NET Core</p>
          </div>
          <div class="shadow-md shadow-[#040c16] hover:scale-110 duration-700">
            <img src={mySQL} alt="mysql icon" className="w-20 mx-auto pt-4" />
            <p class="py-4">MySQL</p>
          </div>
          <div class="shadow-md shadow-[#040c16] hover:scale-110 duration-700">
            <img
              src={msSQLServer}
              alt="ms sql server icon"
              className="w-20 mx-auto pt-4"
            />
            <p class="py-4">Microsoft SQL Server</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
