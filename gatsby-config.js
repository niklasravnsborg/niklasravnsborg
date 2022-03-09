module.exports = {
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-theme-ui`,
      options: {
        preset: '@theme-ui/preset-funk',
      },
    },
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
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     path: `${__dirname}/src/pages`,
    //     name: 'pages'
    //   }
    // },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 80,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: `niklasravnsborg.com`,
      },
    },
  ],
}
