import React from "react";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";
const one = "/one.png";
const two = "/two.png";
const three = "/three.png";
const alexpic = "/alexpic.png";
const dawood = "/dawood.png";
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              blandit, mi at sagittis bibendum, lectus risus maximus quam, vel
              vestibulum tortor tellus ut dolor.mi at sagittis bibendum, lectus
              risus maximus quam, vel vestibulum tortor tellus ut dolor.
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
        {/* <div className="-mt-[10%] ]">
          <Image src={Vector1} width={1490} height={500} alt="wave1" />
        </div> */}
      </div>
    </>
  );
}

export default Learn;
