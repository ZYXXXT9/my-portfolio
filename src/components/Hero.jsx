import React from "react";
import { HiChevronDoubleRight } from "react-icons/hi";
import { Link } from "react-scroll";
import MyImage from "../assets/images/my-image.png";

const Hero = () => {
  return (
    <div className="bg-[#0a192f] w-full h-screen">
      <div className="flex flex-col justify-center items-center">
        <img
          src={MyImage}
          alt="my image"
          style={{ width: "200px" }}
          className="mt-8"
        />
        <p className="text-[#2ebfa5]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Mark.</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          {" "}
          I&apos;m a Software Engineer.
        </h2>
        <p className="py-4 max-w-[700px] text-[#8892b0]">
          I specialize in building Web APIs using C# and .NET Core.
          Additionally, I have experience working with RFID integration.
        </p>
        <div className="mt-2">
          <Link to={"projects"} smooth="{true}" duration={900}>
            <button className="group text-white border-2 px-6 py-3 flex items-center hover:bg-[#2ebfa5] hover:border-[#2ebfa5] duration-700 z-10">
              View Projects{" "}
              <HiChevronDoubleRight className="ml-3 group-hover:rotate-90 duration-500" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
