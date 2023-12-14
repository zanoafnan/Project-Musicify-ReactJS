import React from "react";
import { Link } from "react-scroll";

import { FaItunesNote } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-[#171a38] text-white mt-[-2px] ">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" flex w-full text-[#8e8ed1] md:w-1/4">
        <span>
              <FaItunesNote size={27} />
            </span>
          <h1 className=" font-black text-xl pb-4 ml-1">Musicify</h1>
          <h1 className="ml-1"> ®</h1>
        
        </div>
        <div>
          <h1 className=" font-semibold text-xl pb-4 pt-5 md:pt-0">Company</h1>
          <nav className=" flex flex-col gap-2 ">
            
            <Link
              to=""
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-brightColor"
            >
              Hiring
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 "></span>
            </Link>
            <Link
              to=""
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-brightColor"
            >
              Records
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 "></span>
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-brightColor"
            >
              About Us
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 "></span>
            </Link>
          </nav>
        </div>
        <div>
          <h1 className=" font-semibold text-xl pb-4 pt-5 md:pt-0">Communities</h1>
          <nav className=" flex flex-col gap-2">
            <Link
              to=""
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-brightColor"
            >
              Artist
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 "></span>
            </Link>
            <Link
              to=""
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-brightColor"
            >
              Developers
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 "></span>
            </Link>
            <Link
              to=""
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-brightColor"
            >
              Vendors
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 "></span>
            </Link>
          </nav>
        </div>
        <div className="mr-12">
          <h1 className=" font-semibold text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"

            >
              Musicify@email.com
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"

            >
              Social Media
            </a>
          </nav>
        </div>
      </div>
      <div>
        <p>
          <p className="text-center py-4 ">
            <span className="font-light">
              Portfolio by <a href="https://github.com/zanoafnan/Project-Musicify-ReactJS" target="_blank" rel="noopener noreferrer" className="hover:text-brightColor transition-all cursor-pointer">@zanoafnan</a>
            </span>
          </p>
        </p>
      </div>
    </div>
  );
};

export default Footer;
