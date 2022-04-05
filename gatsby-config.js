const path = require('path');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

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
        apiKey: `f86cb1c4dffc499e9765a740d1af6d4780da`,
        serviceId: 'cbltest',
        apis: [
          {
            endpoint: "blog",
          },
        ],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        plugins: [],
      },
    },
  ],
}