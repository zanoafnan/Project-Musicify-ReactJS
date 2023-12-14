import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className="px-6 py-2  font-light bg-brightColor text-white hover:text-[#1e2180] transition-all rounded-md">
        {props.title}
      </button>
    </div>
  );
};

export default Button;
