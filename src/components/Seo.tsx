import * as React from "react";
import {useSiteMetadata} from "../hooks/useSiteMetadata";

interface PropTypes {
  title?: string | null;
  image?: string | null;
  description?: string | null;
  canonicalPath?: string | null;
}

const Seo: React.FC<PropTypes> = ({
  title,
  image,
  description,
  canonicalPath,
}) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image: defaultImage,
    siteUrl,
    twitterUsername,
  } = useSiteMetadata();

  const titleText = title ? `${title} | ${defaultTitle}` : defaultTitle;
  const canonicalLink = siteUrl + canonicalPath;

  const imageUrl = siteUrl + (image || defaultImage);

  return (
    <>
      <title>{titleText}</title>

      <meta name="image" content={imageUrl} />

      {canonicalPath ? (
        <>
          <link rel="canonical" href={canonicalLink} />
          <meta property="og:url" content={canonicalLink} />
        </>
      ) : (
        <></>
      )}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={titleText} />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={titleText} />
      <meta
        name="twitter:description"
        content={description || defaultDescription}
      />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:creator" content={twitterUsername} />
    </>
  );
};

export default Seo;
