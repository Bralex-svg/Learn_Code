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
          <Grid
            sx={{ width: "80%", ml: { xs: "5%", sm: "10%" } }}
            container
            spacing={3}
          >
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ borderRadius: "3%" }}>
                <CardActionArea>
                  <CardMedia
                    sx={{
                      width: "20%",
                      ml: "35%",
                      transform: "translateY(10px)",
                    }}
                    component="img"
                    title="Sign Up"
                    image={Icon1}
                  ></CardMedia>
                  <CardContent>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        marginLeft: { xs: "27%", sm: "32%" },
                        fontSize: "20px",
                      }}
                    >
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
              <Card sx={{ backgroundColor: "#00C2ED", borderRadius: "3%" }}>
                <CardActionArea>
                  <CardMedia
                    sx={{
                      width: "20%",
                      ml: "35%",
                      transform: "translateY(10px)",
                    }}
                    component="img"
                    title="Sign Up"
                    image={Icon2}
                  ></CardMedia>
                  <CardContent>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        marginLeft: { xs: "15%", sm: "27%" },
                        fontSize: "20px",
                      }}
                    >
                      Enroll in A Course
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
              <Card sx={{ borderRadius: "3%" }}>
                <CardActionArea>
                  <CardMedia
                    sx={{
                      width: "20%",
                      ml: "35%",
                      transform: "translateY(10px)",
                    }}
                    component="img"
                    title="Sign Up"
                    image={Icon3}
                  ></CardMedia>
                  <CardContent>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        marginLeft: { xs: "20%", sm: "30%" },
                        fontSize: "20px",
                      }}
                    >
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
