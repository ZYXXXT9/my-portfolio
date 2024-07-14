import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="bg-[#0a192f] text-gray-300 w-full min-h-screen flex flex-col justify-center items-center "
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center  h-full w-full">
        <div className="mb-5">
          <p className="text-4xl font-bold inline border-b-4 border-[#2ebfa5]">
            About
          </p>
        </div>

        <div className=" text-xl mt-8 text-[#8892b0]  ">
          <div className="py-4 flex transition ease-in-out delay-150 hover:translate-x-5 duration-500 max-w-[700px] ">
            <div>
              Hello! I&apos;m{" "}
              <span className="font-bold text-[#ccd6f6]">Mark</span>, great to
              see you!
            </div>
          </div>

          <div className="py-4 flex transition ease-in-out delay-150 hover:translate-x-5 duration-500 max-w-[700px] ">
            <div>
              I&apos;m a{" "}
              <strong className="text-[#ccd6f6]"> Software Engineer </strong>{" "}
              with{" "}
              <strong className="text-[#ccd6f6]">
                two years of experience
              </strong>{" "}
              in developing{" "}
              <strong className="text-[#ccd6f6]"> Web APIs.</strong> I am
              currently expanding my skills to become a
              <strong className="text-[#ccd6f6]"> fullstack developer,</strong>{" "}
              focusing on creating comprehensive
              <strong className="text-[#ccd6f6]"> websites</strong> and
              <strong className="text-[#ccd6f6]"> web applications.</strong> I
              enjoy learning{" "}
              <strong className="text-[#ccd6f6]"> new technologies</strong> and
              applying them{" "}
              <strong className="text-[#ccd6f6]"> creatively</strong> to enhance
              my expertise.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
