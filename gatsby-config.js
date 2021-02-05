module.exports = {
  siteMetadata: {
    title: `Lagos & Lagos Commercial Cleaning`,
    description: `Commercial Cleaning for the San Pedro and Greater Los Angeles Area`,
    author: `@salemaziel`,
    siteUrl: `https://lagos-cleaning.netlify.app`,
  },
  plugins: [
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-plugin-react-helmet`,
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://lagos-cleaning.netlify.app',
        sitemap: 'https://lagos-cleaning.netlify.app/sitemap.xml',
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Lagos & Lagos Commercial Cleaning`,
        short_name: `Lagos & Lagos Commercial Cleaning`,
        start_url: `/`,
        background_color: `#0a4a89`,
        theme_color: `#0a4a89`,
        display: `minimal-ui`,
        icon: `src/images/Lagos-logo-shadow.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-next-seo',
      options: {
        titleTemplate: 'Lagos & Lagos Commercial Cleaning | %s',
        description: 'Commercial Cleaning for the San Pedro and Greater Los Angeles Area',
        language: 'en',
        openGraph: {
          type: 'website',
          locale: 'en_US',
          url: 'https://lagos-cleaning.netlify.app',
          site_name: 'Lagos & Lagos Cleaning',
          images: [
            {
              url: 'https://lagoscompanies.com/____impro/1/onewebmedia/L&L%20Logo.jpg',
              alt: 'Lagos & Lagos Logo',
            }
          ]
        },
        twitter: {
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        },
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    }
  ]
};
