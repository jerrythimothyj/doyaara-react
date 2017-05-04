import axios from "axios";
const PAGE_ID = "322308301174289";
const APP_KEY = "1109545585782187";
const APP_SECRET_KEY = "515ed5ec4d3639b4aa610380b546a513";
const responseBody = res => res.data;

const instance = axios.create({
  baseURL: "https://graph.facebook.com/v2.9/"
});

const requests = {
  get: url => instance.get(url).then(responseBody)
};

const posts = {
  getById: (id = PAGE_ID) =>
    requests.get(
      `${id}?fields=posts{picture,message,story,comments,likes}&access_token=${APP_KEY}|${APP_SECRET_KEY}`
    )
};

export { posts };
