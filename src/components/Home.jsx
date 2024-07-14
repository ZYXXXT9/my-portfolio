import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div name="home" className="flex flex-col w-full h-screen bg-[#0a192f]">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
