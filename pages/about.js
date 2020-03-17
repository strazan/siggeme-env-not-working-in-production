import Layout from "../components/Layout";

import { fetchUrl, url } from "../utils/util";

const AboutPage = ({ data }) => {
  console.log(data);
  return (
    <Layout title="about">
      {/* <h1>{data.content.title}</h1>
      <p>{data.content.body}</p> */}
    </Layout>
  );
};

AboutPage.getInitialProps = async () => {
  const data = await fetchUrl(`${url}/api/page/about`);
  return { data };
};

export default AboutPage;
