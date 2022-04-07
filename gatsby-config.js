const path = require('path');

require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "Dev Blog",
    description: "Gatsbyで作成したブログサイトです。",
    author: "Engineer X"
  },
  plugins: [
    {
      resolve: `gatsby-source-microcms`,
      options: {
        apiKey: process.env.GATSBY_MICROCMS_API_KEY,
        serviceId: `cbltest`,
        apis: [
          {
            endpoint: `blog`,
          },
        ],
      },
    },
  ],
};