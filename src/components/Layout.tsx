/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faInstagram, faXTwitter, faTumblr, faThreads, faBluesky } from "@fortawesome/free-brands-svg-icons"

import Header from "./Header"
import "./layout.css"

const SOCIALS_LINKS = [
  {
    faIcon: faInstagram,
    url: 'https://www.instagram.com/tiffatiel/',
  },
  {
    faIcon: faXTwitter,
    url: 'https://x.com/tiffatiel',
  },
  {
    faIcon: faTumblr,
    url: 'https://tiffatiel.tumblr.com/',
  },
  {
    faIcon: faThreads,
    url: 'https://www.threads.net/@tiffatiel',
  },
  {
    faIcon: faBluesky,
    url: 'https://bsky.app/profile/tiffatiel.bsky.social',
  },
  {
    faIcon: faFacebookF,
    url: 'https://www.facebook.com/Tiffatiel/',
  },
];

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Tiffatiel Art`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
          © {new Date().getFullYear()} &middot; Independent Comics and Art  &middot; Email: <a href="mailto:tiffatiel@gmail.com">tiffatiel@gmail.com</a> &middot; 
          {SOCIALS_LINKS.map((social) => <a href={social.url} target="_blank"><FontAwesomeIcon icon={social.faIcon} /></a>)}
        </footer>
      </div>
    </>
  )
}

export default Layout