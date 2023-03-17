import React from "react";
const Icon1 = "/icon1.png";
const Icon2 = "/icon2.png";
const Icon3 = "/icon3.png";

const HowTo = () => {
  return (
    <>
      <div className="ml-[20%] w-[70%]">
        <h1 className="font-bold ml-[10%] md:ml-[30%] relative md:-translate-y-[150%] text-2xl md:text-3xl">
          HOW IT WORKS
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="border mb-[20px] w-[80%]">
            <img
              className="w-[25%] relative top-[5%] ml-[30%]"
              src={Icon1}
              alt="Sign Up icon"
            />
            <h2 className="font-bold relative md:top-[8%] text-2xl ml-[25%]">
              Sign Up
            </h2>
            <p className="md:mt-[10%] ml-[7%]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              at.
            </p>
          </div>
          <div className="bg-[#00C2ED] border w-[80%] h-[100%] ">
            <img
              className="w-[25%] relative md:top-[5%] ml-[30%]"
              src={Icon2}
              alt=""
            />
            <h2
              className="font-bold ml-[10%] text-2xl relative md:top-[10%] text-white
            "
            >
              Enroll In A Course
            </h2>
            <p className="md:mt-[10%] ml-[7%]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              at.
            </p>
          </div>
          <div className="border mb-[20px] w-[80%]">
            <img
              className="w-[25%] relative md:top-[5%]  ml-[30%]"
              src={Icon3}
              alt="in in a course"
            />
            <h2 className="font-bold text-2xl md:top-[10%] relative  ml-[20%]">
              Start Learning
            </h2>
            <p className="md:mt-[10%] ml-[7%]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              at.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowTo;
