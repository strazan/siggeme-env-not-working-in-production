import fetch from "isomorphic-unfetch";

export const fetchUrl = url => {
  return fetch(url).then(r => r.json());
};

export const url =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : "https://siggeme.siggelabor.now.sh";
