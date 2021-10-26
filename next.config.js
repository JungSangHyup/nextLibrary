const path = require("path");

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["www.nl.go.kr"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
