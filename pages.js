const ghpages = require("gh-pages");
const pathname = `${__dirname}/build`;
const repoURL = `https://x-access-token:${env.GITHUB_TOKEN}@github.com/daniel-ramirez/daniel-ramirez.github.io.git`;

ghpages.publish(
  pathname,
  {
    branch: "master",
    repo: repoURL,
  },
  (err) => {
    if (err) console.log("ERROR: ", err);
    else console.log("PUBLISHED");
  }
);
