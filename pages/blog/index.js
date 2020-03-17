import Layout from "../../components/Layout";
import { fetchUrl } from "../../utils/util";

const BlogPage = ({ data }) => {
  console.log(data);
  return (
    <Layout title="blog">
      <p>... list all posts</p>
    </Layout>
  );
};

BlogPage.getInitialProps = async () => {
  const data = await fetchUrl(
    `http://localhost:3000/api/page/posts/higher-order-functions`
  );
  return { data };
};

export default BlogPage;
