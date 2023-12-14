import React from "react";
import img from "../assets/img/robot.png";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:flex-row lg:justify-between items-center lg:px-32 px-5 gap-8 bg-bg bg-cover">
     
      <div class="spacer ml-7"></div>

      <div className="relative">


      </div>

      <div className=" w-full lg:w-2/4 ml-5 mt-14  lg:mt-0 ">
        <h1 className="font-bold text-7xl text-white mb-4 ml-3 text-center lg:text-start leading-tight">
          Match Your Vibes</h1>
        <p className="ml-1 text-white ml-3 text-center lg:text-start leading-tight break-words">
          Listen to high quality music like never before.

        </p>

        <div className="flex flex-row flex-wrap justify-center lg:justify-start mt-6 ml-3 gap-6">
          <Button title="Get Started" />
        </div>

      </div>

      <div className="relative w-9/12 h-100">

        <div className=" px-8 py-2 top-5 right-0 rounded-full">
          <img src={img} alt="img" />
          
        </div>

        <div className=" absolute px-8 py-2 bottom-0 -left-10 rounded-full">
          <h2 className=" font-semibold"></h2>
        </div>
      </div>


    </div>
  );
};

export default Home;
