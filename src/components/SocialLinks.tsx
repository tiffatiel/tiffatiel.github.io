import * as React from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
  faTumblr,
  faThreads,
  faBluesky,
} from "@fortawesome/free-brands-svg-icons";

const SOCIAL_LINKS = [
  {
    faIcon: faInstagram,
    url: "https://www.instagram.com/tiffatiel/",
  },
  {
    faIcon: faXTwitter,
    url: "https://x.com/tiffatiel",
  },
  {
    faIcon: faTumblr,
    url: "https://tiffatiel.tumblr.com/",
  },
  {
    faIcon: faThreads,
    url: "https://www.threads.net/@tiffatiel",
  },
  {
    faIcon: faBluesky,
    url: "https://bsky.app/profile/tiffatiel.bsky.social",
  },
  {
    faIcon: faFacebookF,
    url: "https://www.facebook.com/Tiffatiel/",
  },
];

interface PropTypes {
  style: React.CSSProperties;
}

const SocialLinks: React.FC<PropTypes> = ({style}) => {
  return (
    <div
      style={{
        ...style,
        display: "flex",
        flexDirection: "row",
      }}>
      {SOCIAL_LINKS.map(social => (
        <a
          key={social.url}
          href={social.url}
          target="_blank"
          style={{
            display: `block`,
            width: `32px`,
            height: `32px`,
          }}
          rel="noreferrer">
          <FontAwesomeIcon icon={social.faIcon} width="16" size="lg" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
