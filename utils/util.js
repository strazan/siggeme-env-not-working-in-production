import fetch from "isomorphic-unfetch";

export const fetchUrl = url => {
  return fetch(url).then(r => r.json());
};
