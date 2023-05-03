import React from "react";
const Icon1 = "/icon1.png";
const Icon2 = "/icon2.png";
const Icon3 = "/icon3.png";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from "@mui/material";
//HowTo component
const HowTo = () => {
  return (
    <>
      <div>
        <h1
          className="text-3xl font-bold
         sm:ml-[40%] ml-[22%] translate-y-[50%]"
        >
          How It Works
        </h1>
        <div className="sm:translate-y-[30%] translate-y-[10%]">
          <Grid className="w-[80%] ml-[5%]  sm:ml-[10%]" container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    className="w-[20%] translate-y-[15%] ml-[40%]"
                    component="img"
                    title="Sign Up"
                    image={Icon1}
                  ></CardMedia>
                  <CardContent>
                    <Typography className="font-bold ml-[35%] text-xl">
                      Sign Up
                    </Typography>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Beatae rerum ipsa quos quisquam eius veritatis mollitia
                      officiis quod voluptatem! Perspiciatis.
                    </p>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className="bg-[#00C2ED]">
                <CardActionArea>
                  <CardMedia
                    className="w-[20%] translate-y-[15%] ml-[40%] "
                    component="img"
                    title="Sign Up"
                    image={Icon2}
                  ></CardMedia>
                  <CardContent>
                    <Typography className="font-bold ml-[20%] text-xl">
                      Enroll In A Course
                    </Typography>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Soluta iusto voluptatibus odit accusantium sunt, veritatis
                      possimus esse maxime sequi. Praesentium!
                    </p>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    className="w-[20%] translate-y-[15%] ml-[40%]"
                    component="img"
                    title="Sign Up"
                    image={Icon3}
                  ></CardMedia>
                  <CardContent>
                    <Typography className="font-bold ml-[20%] text-xl">
                      Start Learning
                    </Typography>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Aspernatur repellendus quidem temporibus doloribus,
                      eligendi omnis sunt vero quis ad culpa!
                    </p>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default HowTo;
