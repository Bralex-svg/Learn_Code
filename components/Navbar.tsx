import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const logoUrl = "/logo.png";
import Link from "next/link";
//NAVBAR COMPONENT
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <div className="flex text-black mt-[0px] w-full md:mt-[1px] bg-[#ffffff] justify-between items-center px-4 h-24 max-w-[1240px] mx-auto ">
        {/* <img className="lg:w-[3%] w-[10%] " src={Logo} alt="logo" />{" "} */}

        <Link href="/">
          <img
            className="lg:w-[70%] md:translate-x-[30%] translate-x-[10%] w-[50%] "
            src={logoUrl}
            alt="logo"
          />
        </Link>
        <ul className="hidden ml-[30%] text-black w-full md:flex ">
          <li className="p-4">Home</li>
          <li className="p-4">About</li>
          <Link href="#courses">
            <li className="p-4">Courses</li>
          </Link>
          <li className="p-4">Pricing</li>
          <button className="bg-[#00C2ED]  text-white ml-8 rounded-md font-medium w-[180px]  mx-auto my-2 px-4 py-3">
            Contact
          </button>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            nav
              ? "fixed top-0 left-0 bg-[#00C2ED]   w-[60%] h-full border-r text-white border-r-gray-900 ease-in-out duration-500"
              : "fixed left-[-100%] z-9999"
          }
        >
          <h1 className="w-full font-bold text-3xl m-4 text-white">
            LearnCode
          </h1>

          <ul className=" md:hidden p-4 uppercase">
            <li className="p-6 border-b border-gray-600 ">ABOUT US</li>
            <li className="p-6 border-b border-gray-600">FIND US</li>
            <li className="p-6 border-b border-gray-600">ALL CAMPAIGNS</li>

            <button className="bg-[#ffffff]  text-black mt-7 ml-2 rounded-md font-medium w-[180px]  mx-auto my-2 px-4 py-3">
              Contact
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
