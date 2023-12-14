import React from "react";
import ReviewCard from "../layouts/ReviewCard";
import img1 from "../assets/img/pic1.png";
import img2 from "../assets/img/pic2.png";
import img3 from "../assets/img/pic3.png";

const Review = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-normal lg:px-32 px-5  bg-bg bg-cover  ">
      <div className="mt-24">
      </div>
      <h1 className=" font-semibold text-white text-center text-4xl lg:mt-16    ">
        Users Reviews
      </h1>

      <div className=" flex flex-col lg:flex-row gap-5 text-white justify-center py-4 my-8">
        <ReviewCard img={img1} title="James Wilson" rating={4.5} />
        <ReviewCard img={img2} title="Christina River" rating={4.5} />
        <ReviewCard img={img3} title="William Keane" rating={5} />
      </div>

      <h1 className=" flex flex-col font-light text-white text-center  text-3xl lg:mt-1    ">
        
      </h1>
      
      
    </div>


    
  );
};

export default Review;
