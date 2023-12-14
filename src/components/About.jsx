import React from "react";
import img from "../assets/img/about.png";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center lg:px-32 px-5 text-white  bg-bg bg-cover ">
      <h1 className="font-semibold text-center text-5xl mb-15">
        
      </h1>

      <div className="flex flex-col lg:flex-row items-center gap-12 mb-1 mt-10 space-x-6">
        <div className="w-full lg:w-3/4 p-6 space-y-8  mb-10 ml-3">
          <h2 className="font-bold text-3xl mt-4">About Musicify</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commo
            quaerat quia quasi beatae et iste, tempora voluptatum corporis sit
            pariatur eaque exercitationem, doloribus eum optio nobis
            quidem,  dolor atque.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ut
            minima perspiciatis doloribus quod repellendus molestiae rerum!
            Enim, vero natus.
          </p>

          <Button title="Learn More" />
        </div>

        <div className=" pl-8 w-full">
          <img src={img} alt="img" className=" ml-auto lg:mb-8 " />
        </div>

        
      </div>
    </div>
  );
};

export default About;
