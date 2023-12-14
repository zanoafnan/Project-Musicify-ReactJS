import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className=" bg-darkColor text-[#c2d4b0] nrounded-t-3xl m:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-4">TeaShop</h1>
          <p className=" text-sm">
            Welcome to our teashop where warm aromas and cozy ambiance embrace you.
            Sip, savor, and indulge as we invite you to a world of delightful moments and endless blends.
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
          <nav className=" flex flex-col gap-2">
            <Link
              to="menu"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-[#dae6cf]"
            >
              Menu
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-[#dae6cf]"
            >
              About Us
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>
            <Link
              to="products"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-[#dae6cf]"
            >
              Products
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>
            <Link
              to="review"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-[#dae6cf]"
            >
              Reviews
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Menu</h1>
          <nav className=" flex flex-col gap-2">
            <Link
              to="menu"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-[#dae6cf]"
            >
              Jasmine Tea
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>
            <Link
              to="menu"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-[#dae6cf]"
            >
              Chamomile Tea
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>
            <Link
              to="menu"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-[#dae6cf]"
            >
              Milk Tea
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-[#dae6cf] transition-all cursor-pointer"

            >
              TeaShop@email.com
            </a>
            <a
              className=" hover:text-[#dae6cf] transition-all cursor-pointer"

            >
              +12 345 678 910
            </a>
            <a
              className=" hover:text-[#dae6cf] transition-all cursor-pointer"

            >
              Social media
            </a>
          </nav>
        </div>
      </div>
      <div>
        <p>
          <p className="text-center py-4 ">
            <span className="">
              Portfolio by <a href="https://github.com/zanoafnan/Project-TeaShop-ReactJS" target="_blank" rel="noopener noreferrer" className="hover:text-[#dae6cf] transition-all cursor-pointer">@zanoafnan</a>
            </span>
          </p>
        </p>
      </div>
    </div>
  );
};

export default Footer;
