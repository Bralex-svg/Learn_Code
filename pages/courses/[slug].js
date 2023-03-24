import { useRouter } from "next/router";
import data from "../../utils/data";
import Layout from "../../components/Layout";

//SLUG FILE

export default function ProductScreen() {
  const router = useRouter();
  const { slug } = router.query;
  const course = data.courses.find((a) => a.slug === slug);
  if (!course) {
    return <div>Product not found</div>;
  }
  return (
    <Layout title={course.name}>
      <div>
        <NextLink>
          <Link>Back to products</Link>
        </NextLink>
      </div>
    </Layout>
  );
}
