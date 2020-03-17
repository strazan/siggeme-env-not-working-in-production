// import { Storyblok } from "../../../utils/StoryblokClient";

export default async (req, res) => {
  res.status(200).json({
    data: {
      sb: `${process.env.STORYBLOK_API_TOKEN}`,
      test: `${process.env.MY_TEST_TOKEN}`
    }
  });

  // const {
  //   query: { slug }
  // } = req;
  // Storyblok.get(`cdn/stories/about`, {})
  //   .then(response => {
  //     const {
  //       data: {
  //         story: { content }
  //       }
  //     } = response;
  //     const data = { content };
  //     res.status(200).json(data);
  //   })
  //   .catch(error => {
  //     console.log(error);
  //     res.status(400).json(`${error.name}: NOT A MESSAGE`);
  //   });
};
