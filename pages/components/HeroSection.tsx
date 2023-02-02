import { Grid, Typography, Button } from "@mui/material";
const bannerImg = "./Banner.png";
export default function HeroSection() {
  return (
    <>
      <div className="w-full   flex flex-col justify-between">
        <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
          {/* Content */}
          <div className="flex flex-col justify-center md:items-start w-full px-2 ">
            <h1 className="text-5xl  md:ml-[15%] md:text-5xl md:w-[90%] md:text-start text-center  md:text-center py-3 w-[100%] xl font-bold text-black ">
              Learn To Code At The Comfort Of Your Home
            </h1>
            <p className=" md:w-[70%] -translate-y-[20%] sm:translate-y-[0] md:ml-[15%]  py-3 text-black ">
              Learn how to code or build your skills in programming online to
              gain a better understanding of how websites and apps are designed
              and developed.
            </p>
            <button className="border-[3px] mx-auto md:mx-0 bg-[#00C2ED] my-5 text-white -translate-y-[100%] sm:translate-y-[0] rounded-[20px] md:ml-[15%] py-2 w-[50%] md:w-[30%] md:px-[20px]">
              Get Started
            </button>
          </div>

          {/* END OF CONTENT */}
          <div>
            <img
              className="w-[80%] -translate-y-[20%] sm:translate-y-[0]"
              src={bannerImg}
              alt="chicken"
            />
          </div>
        </div>
      </div>
    </>
  );
}
