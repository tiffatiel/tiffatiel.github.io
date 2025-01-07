import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Tiffatiel Art`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-PDY264TGX1", // Google Analytics / GA
        ],
        gtagConfig: {
          anonymize_ip: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Tiffatiel Art",
        short_name: "tiffatiel",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#f8cecb",
        display: `browser`,
        icon: "src/images/icon.png",
      },
    },
  ],
}

export default config
