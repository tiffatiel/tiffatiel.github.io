import type {GatsbyConfig, Node} from "gatsby";

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
    "gatsby-plugin-mdx",
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
        icon: "static/images/icon.png",
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
      resolve: `gatsby-transformer-yaml`,
      options: {
        // Conditionally set the typeName so that we both use a lowercased and capitalized type name
        typeName: ({node}: {node: Node}) => {
          const name = node.sourceInstanceName;
          if (name === `comics`) {
            return `Comic`;
          }
          return name;
        },
      },
    },
  ],
};

export default config;
