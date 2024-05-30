module.exports = {
  siteMetadata: {
    siteUrl: `https://niklasravnsborg.com`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    'gatsby-transformer-yaml',
    `gatsby-plugin-netlify`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/content`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/src/images`,
    //     name: `images`
    //   }
    // },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 80,
      },
    },
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: `niklasravnsborg.com`,
      },
    },
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sitemap`,
  ],
}
