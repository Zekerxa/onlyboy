
const request = {
  url: `https://api.netlify.com/api/v1/sites/8b13e8fd-a73a-4341-b6d7-9a61d8329248/forms/5dae8a8fdf8573000be0be1b/submissions?state=ham&page=1&per_page=20`,
  method: "GET",
  server: "Netlify",
  statusCode: 200,
  headers: {
    "Access-Control-Allow-Headers": "*",
    "access-control-allow-methods": "GET",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    Origin: " https://app.netlify.com",
    "Accept-Encoding": "gzip, deflate, br",
    "www-authenticate": "Basic",
    Authorization:
      "Bearer a0835290848a78775d170d42dd3b7ed67f4d5f99520a6e601e084ec50c016209", //Main thing
    "content-type": "application/json",
    "sec-fetch-site": "same-origin"
  },
  withCredentials: false,
  responseType: "application/json",
  responseEncoding: "utf8",
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN"
};

module.exports = request;
