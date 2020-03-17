import { Storyblok } from "../../../utils/StoryblokClient";

export default async (req, res) => {
  // const {
  //   query: { slug }
  // } = req;
  res.status(200).json({ data: process.env.STORYBLOK_API_TOKEN });

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
