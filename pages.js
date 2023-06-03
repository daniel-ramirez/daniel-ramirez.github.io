const ghpages = require("gh-pages");
const pathname = `${__dirname}/build`;
const repoURL = `https://x-access-token:${process.env.GITHUB_TOKEN}@github.com/daniel-ramirez/home.git`;

ghpages.publish(
  pathname,
  {
    branch: "portfolio",
    repo: repoURL,
  },
  (err) => {
    if (err) console.log("ERROR: ", err);
    else console.log("PUBLISHED");
  }
);
