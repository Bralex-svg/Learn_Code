import { useRouter } from "next/router";
import data from "../../utils/data";
import Layout from "../../components/Layout";
// import NextLink from "next/link";
// import Link from "next/link";
// import {
//   Grid,
//   Link,
//   List,
//   ListItem,
//   CardActionArea,
//   CardMedia,
//   CardContent,
//   Typography,
//   CardActions,
//   Card,
// } from "@material-ui/core";
//SLUG

export default function ProductScreen() {
  const router = useRouter();
  const { slug } = router.query;
  const course = data.courses.find((a) => a.slug === slug);
  if (!course) {
    return <div>Course not found</div>;
  }
  return (
    // <Layout title={course.name}>
    <div>
      {/* <NextLink>
          <Link>Back to products</Link>
        </NextLink> */}
      <h1>{course.name}</h1>
    </div>
    // </Layout>
  );
}
