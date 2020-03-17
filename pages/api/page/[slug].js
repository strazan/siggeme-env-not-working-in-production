// import { Storyblok } from "../../../utils/StoryblokClient";

const StoryblokClient = require("storyblok-js-client");

export const Storyblok = new StoryblokClient({
  accessToken: process.env.STORYBLOK_API_TOKEN,
  cache: {
    clear: "auto",
    type: "memory"
  }
});

export default async (req, res) => {
  const {
    query: { slug }
  } = req;

  Storyblok.get(`cdn/stories/${slug}`, {})
    .then(response => {
      console.log(response);
      const {
        data: {
          story: { content }
        }
      } = response;
      const data = { content };
      res.status(200).json(data);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json(`${error.name}: WHY ${error.message}`);
    });
};
