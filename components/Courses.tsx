//COURSES COMPONENT
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from "@mui/material";
import React from "react";
import data from "../utils/data";
import { AiFillStar } from "react-icons/ai";
import NextLink from "next/link";
const Courses = () => {
  return (
    <>
      <div id="courses">
        <h1
          className="sm:text-3xl text-2xl font-bold
         ml-[20%] sm:ml-[40%] sm:translate-y-[340%] sm:w-[60%] w-[80%]  translate-y-[360%]"
        >
          Browse Our Courses
        </h1>

        <div className="sm:translate-y-[50%] translate-y-[15%]">
          <Grid className="w-[80%] ml-[10%]" container spacing={3}>
            {data.courses.map((course) => (
              <Grid
                className="-ml-[5%] sm:ml-[0]"
                item
                xs={12}
                sm={6}
                md={4}
                key={course.name}
              >
                <Card>
                  <NextLink href={`/course/${course.slug}`} passHref>
                    <CardActionArea>
                      <CardMedia
                        className="w-[95%] rounded-[3%] ml-[3%]"
                        component="img"
                        title={course.title}
                        image={course.image}
                      ></CardMedia>
                      <CardContent>
                        <Typography className="font-bold text-[1rem] sm:text-xl">
                          {course.name}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </NextLink>
                  <CardActions>
                    <Typography>{course.short_description}</Typography>{" "}
                    <AiFillStar className="text-yellow-300 ml-[20%] " />
                    <AiFillStar className="text-yellow-300" />
                    <AiFillStar className="text-yellow-300" />
                    <AiFillStar className="text-yellow-300" />
                    <AiFillStar className="text-yellow-300" />
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
      <div className="bg-[#00C2ED] sm:ml-[6%] rounded-[2rem]  w-[0] sm:w-[90%] -mt-[5%] h-[15rem]">
        {" "}
      </div>
    </>
  );
};

export default Courses;
