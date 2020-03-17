import Layout from "../components/Layout";
import { fetchUrl } from "../utils/util";

const AboutPage = ({ data }) => {
  return (
    <Layout title="about">
      <h1>{data.content.title}</h1>
      <p>{data.content.body}</p>
    </Layout>
  );
};

AboutPage.getInitialProps = async () => {
  const data = await fetchUrl(`http://localhost:3000/api/page/about`);
  console.log(data);
  return { data };
};

export default AboutPage;
