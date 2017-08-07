module.exports = {
  siteMetadata: {
    title: `Matt Petrie: Digital Product Maker`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-preact`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
  ],
}
