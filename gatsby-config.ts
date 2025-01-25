import type {GatsbyConfig} from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Tiffatiel Art`,
    siteUrl: `https://tiffatiel.com`,
    description: `Independent comic artist focused on creating short stories with cute art and emotional themes.`,
    image: `/icon.png`,
    twitterUsername: `@tiffatiel`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          `G-PDY264TGX1`, // Google Analytics / GA
        ],
        gtagConfig: {
          anonymize_ip: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tiffatiel Art`,
        short_name: `tiffatiel`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#f8cecb`,
        display: `browser`,
        icon: `static/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/resources`,
        name: `resources`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/comics`,
        name: `comics`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
            },
          },
        ],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-yaml`,
  ],
};

export default config;
