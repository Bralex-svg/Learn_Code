import React from "react";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";
const one = "/one.png";
const two = "/two.png";
const three = "/three.png";
const alexpic = "/alexpic.png";
const dawood = "/iddris.png";
const beardguy = "/beardguy.png";
const Vector1 = "/Vector1.png";
type Props = {};

function Learn({}: Props) {
  return (
    <>
      <h1 className="sm:ml-[40%] ml-[15%] translate-y-[-70%] sm:translate-y-[140%] sm:text-3xl text-2xl font-bold">
        Why Learn From Us?
      </h1>
      <div className="bg-[#00C2ED] mt-[10%] w-[100%] h-[35rem] sm:h-[30rem]">
        <Grid container spacing={2}>
          <Grid
            sx={{
              transform: { sm: "translatex(45%)", xs: "translatex(10%)" },
              mt: { sm: "2%" },
            }}
            item
            xs={8}
            md={4}
          >
            <Image
              className="w-[25%] sm:w-[17%]"
              src={one}
              alt="Icon"
              width={70}
              height={80}
            />
          </Grid>
          <Grid
            sx={{
              mt: {
                sm: "3%",

                transform: { xs: "translatex(-20%)" },
              },
            }}
            item
            xs={12}
            md={4}
          >
            <Typography
              sx={{
                color: "#fff",
                fontWeight: "bold",
                fontSize: { sm: "2rem", xs: "1.5rem" },
                ml: { xs: "20%", sm: "-5%" },
              }}
              variant="h5"
            >
              Real Time Learning
            </Typography>
            <Typography
              sx={{
                color: "#fff",
                mt: { sm: "2%" },
                fontSize: { xs: "0.9rem" },
                width: { xs: "90%" },
                ml: { xs: "8%", sm: "-5%" },
              }}
              variant="body1"
            >
              We offer real-time teaching and learning for our students. At
              LearnCode, we belive putting courses online and asking student to
              learn from them is not an effective way to learn. Our well versed
              instructors will always be available to assit you start a carrer
              in one of the booming industries in the world.
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ mt: { sm: "-7%", xs: "-25%" } }} md={4}>
            <Image
              className="w-[80%] sm:w-[90%]"
              src={alexpic}
              alt="Image"
              width={380}
              height={100}
            />
          </Grid>
        </Grid>
        <div className="-mt-[15%] ]">
          <Image
            className="sm:w-[110%]"
            src={Vector1}
            width={900}
            height={100}
            alt="wave1"
          />
        </div>

        <div className="sm:-mt-[25%]">
          <Grid container spacing={5} className="sm:w-[100%]">
            <Grid
              sx={{
                transform: { sm: "translatex(20%)", xs: "translatex(10%)" },
                mt: { sm: "-2%" },
                width: { sm: "500%" },
              }}
              item
              xs={8}
              md={4}
            >
              {/* <img src={dawood} alt="dawood" className="sm:w-[180%]" /> */}
              <Image
                className="w-[80%] sm:mt- sm:w-[120%]"
                src={dawood}
                alt="Image"
                width={980}
                height={900}
              />{" "}
            </Grid>
            <Grid
              sx={{
                mt: {
                  sm: "3%",

                  transform: { xs: "translatex(-20%)" },
                },
              }}
              item
              xs={12}
              md={4}
            >
              <Typography
                sx={{
                  color: "black",
                  fontWeight: "bold",
                  fontSize: { sm: "2rem", xs: "1.5rem" },
                  ml: { xs: "20%", sm: "10%" },
                }}
                variant="h5"
              >
                Lots Of Hands On Projects
              </Typography>
              <Typography
                sx={{
                  color: "black",
                  mt: { sm: "2%" },
                  fontSize: { xs: "0.9rem" },
                  width: { xs: "90%" },
                  ml: { xs: "8%", sm: "10%" },
                }}
                variant="body1"
              >
                We offer real-time teaching and learning for our students. At
                LearnCode, we belive putting courses online and asking student
                to learn from them is not an effective way to learn. Our well
                versed instructors will always be available to assit you start a
                carrer in one of the booming industries in the world.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                mt: { sm: "4%", xs: "-25%", ml: { sm: "20%" } },
              }}
              md={4}
            >
              <Image
                className="w-[30%] sm:w-[17%] sm:ml-[30%]"
                src={two}
                alt="Image"
                width={100}
                height={100}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}

export default Learn;
