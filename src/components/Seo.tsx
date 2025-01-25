import * as React from "react";
import {graphql, useStaticQuery} from "gatsby";

interface PropTypes {
  title?: string | null;
}

const Seo: React.FC<PropTypes> = ({title}) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const titleText = title
    ? `${title} | ${data.site.siteMetadata.title}`
    : data.site.siteMetadata.title;

  return <title>{titleText}</title>;
};

export default Seo;
