import * as React from "react";
import {Link} from "gatsby";

import "./header.css";

interface Props {
  siteTitle: string;
}

const Header = ({siteTitle}: Props) => (
  <header>
    <Link to="/">
      <img src="/images/icon.png" alt={siteTitle} />
    </Link>
    <Link to="/">Comics</Link>
    <Link to="/resources">Resources</Link>
    <a href="https://store.tiffatiel.com/" target="_blank" rel="noreferrer">
      Store
    </a>
  </header>
);

export default Header;
