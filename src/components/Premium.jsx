import React from 'react';
import Button from "../layouts/Button";

const PremiumPlan = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:flex-row  items-center lg:px-32 px-5 gap-10 bg-bg bg-cover ">
      <div className="mb-16 text-center">
        <h1 className="font-semibold text-white text-4xl mt-32 lg:mt-14 mb-16">
          Begin Your Top-Tier Experience Now!
        </h1>
        <h1 className="text-3xl font-bold mb-6"></h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-darkColor">

          <div className="bg-gradient-to-tl from-[#8c70ba] to-[#f2cef2] bg-opacity-20 rounded-lg shadow-md p-6 h-96 flex flex-col justify-between">
          
            <h2 className="text-xl text-center font-semibold mb-4">Basic Plan</h2>

            <ul className="list-disc pl-4">
              <h1>Ad-Free Listening</h1>
              <h1>High-Quality Streaming</h1>
              <h1>Enhanced Search Functionality</h1>
            </ul>

            <div className="text-center">
              <h2 className="text-darkColor font-semibold text-6xl mt-4">$25</h2>
              <div className="mt-5"> </div>
              <Button title="Buy Now" className="text-center content-center lg:mt-8"></Button>
            </div>
          </div>

          <div className="bg-gradient-to-tl from-[#8888e3] to-[#dac9f0] rounded-lg shadow-md p-6 h-96 flex flex-col justify-between">

            <h2 className="text-xl text-center font-semibold mb-4">Standard Plan</h2>

            <ul className="list-disc pl-4">
              <h1>Ad-Free Listening</h1>
              <h1>High-Quality Streaming</h1>
              <h1>Enhanced Search Functionality</h1>
              <h1>Multiple Device Streaming</h1>
            </ul>

            <div className="text-center">
              <h2 className="text-darkColor font-semibold text-6xl mt-4">$35</h2>
              <div className="mt-5"> </div>
              <Button title="Buy Now" className="text-center content-center mt-2"></Button>
            </div>
          </div>

          <div className="bg-bg bg-gradient-to-tl from-[#4553c4] to-[#cedaf5] rounded-lg shadow-md p-6 h-96 flex flex-col justify-between">
          
            <h2 className="text-xl text-center font-semibold mb-4">Luxury Plan</h2>

            <ul className="list-disc pl-4">
              <h1>Ad-Free Listening</h1>

              <h1>High-Quality Streaming</h1>
              <h1>Enhanced Search Functionality</h1>
              <h1>Multiple Device Streaming</h1>
              <h1>Offline Downloads</h1>
              
              
            </ul>

            <div className="text-center">
              <h2 className="text-darkColor font-semibold text-6xl mt-4">$45</h2>
              <div className="mt-5"> </div>
              <Button title="Buy Now" className="text-center content-center mt-2"></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumPlan;
