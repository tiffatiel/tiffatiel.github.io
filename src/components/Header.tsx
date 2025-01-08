import * as React from "react";
import {Link} from "gatsby";

interface Props {
  siteTitle: string;
}

const Header = ({siteTitle}: Props) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}>
    <Link
      to="/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
      }}>
      <img src="/images/icon.png" alt="Tiffatiel logo" height={64} />
      {siteTitle}
    </Link>
    <Link to="/">Comics</Link>
    <Link to="/resources">Resources</Link>
    <a href="https://store.tiffatiel.com/" target="_blank" rel="noreferrer">
      Store
    </a>
  </header>
);

export default Header;
