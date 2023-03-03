import React from "react";
const Icon1 = "/icon1.png";
const Icon2 = "/icon2.png";
const Icon3 = "/icon3.png";

const HowTo = () => {
  return (
    <>
      <div className="ml-[10%]">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="border w-[60%]">
            <img className="w-[25%] ml-[20%]" src={Icon1} alt="" />
            <h2 className="font-bold ml-[20%]">Sign Up</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              at.
            </p>
          </div>
          <div className="bg-[#00C2ED] border w-[60%] h-[100%]">
            <img className="w-[25%] ml-[20%]" src={Icon2} alt="" />
            <h2
              className="font-bold ml-[20%] text-white
            "
            >
              Enroll In A Course
            </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              at.
            </p>
          </div>
          <div className="border w-[60%]">
            <img className="w-[25%] ml-[20%]" src={Icon3} alt="" />
            <h2 className="font-bold ml-[20%]">Start Learning</h2>
            <p>
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
