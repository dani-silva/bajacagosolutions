module.exports = {
  siteMetadata: {
    title: `Baja Cargo Solutions`,
    description: `Agencia soluciones logisticas`,
    socialMedia: {
      facebook: 'https://facebook.com/BajaRecycling',
      weChat: 'https://wechat.com'
    },
    email: 'info@bajacargosolutions.com',
    phone: '(646) 978 5965',
    author: `@dovlius`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `baja cargo solutions`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#00457D`,
        theme_color: `#00457D`,
        display: `minimal-ui`,
        icon: `src/images/bcs-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
