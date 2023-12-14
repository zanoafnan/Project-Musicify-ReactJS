import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import { BsStarHalf, BsStarFill, BsStar } from "react-icons/bs";

const ReviewCard = (props) => {
  // Function to generate stars based on the rating
  const renderStars = (rating) => {
    // Cap the rating at 5
    const cappedRating = Math.min(5, rating);

    const stars = [];
    const fullStars = Math.floor(cappedRating);
    const hasHalfStar = cappedRating % 1 !== 0;

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<BsStarFill key={i} className="text-darkColor" />);
    }

    // Half star
    if (hasHalfStar) {
      stars.push(<BsStarHalf key="half" className="text-darkColor" />);
    }

    // Remaining empty stars
    const remainingStars = 5 - Math.ceil(cappedRating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<BsStar key={`empty-${i}`} className="text-darkColor" />);
    }

    return stars;
  };

  return (
    <div className="flex flex-col w-full lg:w-2/6 bg-brightColor backdrop-blur p-3 rounded-lg gap-5">
      <div className="flex flex-col items-center lg:items-strt">
        <div className="w-1/4">
          <img className="rounded-full mb-2" src={props.img} alt="img" />
        </div>
        <div className="mx-3 content-center">
          <h2 className="font-semibold text-lg">{props.title}</h2>
          <div className="flex justify-center mt-2">{renderStars(props.rating)}</div>
        </div>
      </div>
      <p className="text-center text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
        consequatur fuga suscipit perspiciatis totam. Eos esse nisi omnis dicta,
        aperiam distinctio fuga ipsam rerum rem.
      </p>
    </div>

  );
};

export default ReviewCard;
