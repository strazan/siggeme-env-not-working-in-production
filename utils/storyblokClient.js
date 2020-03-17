const StoryblokClient = require("storyblok-js-client");

export const Storyblok = new StoryblokClient({
  accessToken: process.env.STORYBLOK_KEY,
  cache: {
    clear: "auto",
    type: "memory"
  }
});
