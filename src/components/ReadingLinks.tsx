import * as React from "react";
import {Link} from "gatsby";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
  faTumblr,
  faBluesky,
} from "@fortawesome/free-brands-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {faBook, faGlobe, faStar} from "@fortawesome/free-solid-svg-icons";

interface AvailableOnProps {
  link?: string | null;
  name: string;
  faIcon?: IconProp;
}

const AvailableOn: React.FC<AvailableOnProps> = ({link, name, faIcon}) => {
  if (!link) return <></>;
  return (
    <li>
      <a href={link || ""} target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faIcon || faStar} width="12" size="lg" />
        {name}
      </a>
    </li>
  );
};

interface ReadingLinksProps {
  siteLink?: string | null;
  links?: SupportedLinks | null;
}

interface SupportedLinks {
  store?: string | null;
  webtoons?: string | null;
  tapas?: string | null;
  tumblr?: string | null;
  bluesky?: string | null;
  x?: string | null;
  instagram?: string | null;
  facebook?: string | null;
}

export const ReadingLinks: React.FC<ReadingLinksProps> = ({siteLink, links}) => {
  return <ul className="reading-options">
      {siteLink ? <li>
        <Link to={siteLink}>
          <FontAwesomeIcon icon={faGlobe} width="12" size="lg" />
          This site
        </Link>
      </li> : <></>}
      <AvailableOn
        link={links?.store}
        name="Print"
        faIcon={faBook}
      />
      <AvailableOn link={links?.webtoons} name="Webtoons" />
      <AvailableOn link={links?.tapas} name="Tapas" />
      <AvailableOn
        link={links?.tumblr}
        name="Tumblr"
        faIcon={faTumblr}
      />
      <AvailableOn
        link={links?.bluesky}
        name="BlueSky"
        faIcon={faBluesky}
      />
      <AvailableOn link={links?.x} name="X" faIcon={faXTwitter} />
      <AvailableOn
        link={links?.instagram}
        name="Instagram"
        faIcon={faInstagram}
      />
      <AvailableOn
        link={links?.facebook}
        name="Facebook"
        faIcon={faFacebookF}
      />
    </ul>;
}