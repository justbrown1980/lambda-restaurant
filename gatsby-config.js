module.exports = {
  siteMetadata: {
    title: 'Lambda Restaurant',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Lambda Restaurant',
        short_name: 'Lambda',
        start_url: '/',
        background_color: '#000000',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/lambda-logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Lato`,
          `Yeseva+One\:400` // you can also specify font weights and styles
        ]
      }
    }
  ],
}
