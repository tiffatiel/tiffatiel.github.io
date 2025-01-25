/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react";
import {useStaticQuery, graphql} from "gatsby";
import Header from "./Header";
import SocialLinks from "./SocialLinks";
import "./layout.css";

// See: https://stackoverflow.com/a/59429852
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
import {config} from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const Layout: React.FC<React.PropsWithChildren> = ({children}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Tiffatiel Art`} />
      <main
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
          marginTop: `32px`,
          background: `white`,
        }}>
        {children}
      </main>
      <footer
        style={{
          marginTop: `64px`,
          fontSize: `var(--font-sm)`,
          display: `flex`,
          flexDirection: `row`,
          justifyContent: `center`,
          padding: `16px`,
        }}>
        <div>
          © {new Date().getFullYear()} Tiffatiel &middot; Independent Comics
          and Art &middot; Email:{" "}
          <a href="mailto:tiffatiel@gmail.com">tiffatiel@gmail.com</a> &middot;
        </div>
        <SocialLinks style={{marginLeft: "8px"}} />
      </footer>
    </>
  );
};

export default Layout;
