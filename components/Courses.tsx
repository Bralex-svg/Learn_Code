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

const Courses = () => {
  return (
    <>
      <div>
        <h1>Browse Our Courses</h1>
        <div>
          <Grid container spacing={3}>
            {data.courses.map((course) => (
              <Grid item xs={12} sm={6} md={4} key={course.name}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      title={course.title}
                      image={course.image}
                      height="200"
                      width="300"
                    ></CardMedia>
                    <CardContent>
                      <Typography>{course.name}</Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Typography>{course.short_description}</Typography>
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
