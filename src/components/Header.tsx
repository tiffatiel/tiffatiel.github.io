import * as React from "react";
import {Link} from "gatsby";

import "./header.css";

interface Props {
  siteTitle: string;
}

const Header = ({siteTitle}: Props) => (
  <header>
    <div className="header-content">
      <Link to="/" className="logo-link">
        <img src="/images/icon.png" alt={siteTitle} />
      </Link>
      <Link to="/">Comics</Link>
      <Link to="/resources">Resources</Link>
      <a href="https://mixam.com/print-on-demand/tiffatiel" target="_blank" rel="noreferrer">
        Store
      </a>
    </div>
  </header>
);

export default Header;
