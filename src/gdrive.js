const getting = {
    url: ` https://api.netlify.com/api/v1/sites/zekerxa-x.netlify.com`,
    method: "GET",
    statusCode: 200,
    headers: {
        "Access-Control-Allow-Headers": "*",
        "access-control-allow-methods": "GET",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        Origin: "https://app.netlify.com",
        "Referer": "https://api.netlify.com/api/v1/sites/8b13e8fd-a73a-4341-b6d7-9a61d8329248/metadata",
        "Accept-Encoding": "gzip, deflate, br",
        "www-authenticate": "Basic",
        Authorization:
            "Bearer 20a05fcce283f7eb616c467a301d46db3dc508088a92d183b9858096650bd32f", //Main thing 
        "sec-fetch-site": "same-origin"
    },
    withCredentials: false,
    responseType: "application/json",
    responseEncoding: "utf8",
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN"
};

const posting = {
    url: `https://api.netlify.com/api/v1/sites/8b13e8fd-a73a-4341-b6d7-9a61d8329248/metadata`,
    method: "PUT",
    statusCode: 200,
    headers: {
        "Access-Control-Allow-Headers": "*",
        "access-control-allow-methods": "PUT",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "text/plain",
        Origin: "https://app.netlify.com",
        "Referer": "https://app.netlify.com/sites/zekerxa-x/overview",
        "Accept-Encoding": "gzip, deflate, br",
        "www-authenticate": "Basic",
        Authorization:
            "Bearer 20a05fcce283f7eb616c467a301d46db3dc508088a92d183b9858096650bd32f", //Main thing 
        "sec-fetch-site": "same-origin"
    },
    withCredentials: false,
    responseType: "application/json",
    responseEncoding: "utf8",
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN"
};
module.exports.getting = getting;
module.exports.posting = posting;


const GlobalData = [
      {
         "MainHeader" : "Zin Min Htet",
         "SecPageData" : [{
           "Name":"Zin Min Htet",
           "Age" : 20,
           "Work":"Front-end Web Developer",
           "Address":"Myanmar/Yangon",
           "Phone"  : "+959-687717767"
         }]
      }
    ]

module.exports.GlobalData = GlobalData;
