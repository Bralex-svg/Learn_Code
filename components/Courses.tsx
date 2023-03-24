//COURSES COMPONET
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
const Courses = () => {
  return (
    <>
      <div>
        <h1
          className="text-2xl font-bold
         ml-[40%] translate-y-[80%]"
        >
          Browse Our Courses
        </h1>
        <div className="translate-y-[30%]">
          <Grid className="w-[80%] ml-[10%]" container spacing={3}>
            {data.courses.map((course) => (
              <Grid item xs={12} sm={6} md={4} key={course.name}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      title={course.title}
                      image={course.image}
                    ></CardMedia>
                    <CardContent>
                      <Typography className="font-bold text-xl">
                        {course.name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
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
    </>
  );
};

export default Courses;
