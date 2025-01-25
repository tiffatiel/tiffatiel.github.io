import * as React from "react";
import {graphql, Link, PageProps} from "gatsby";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import Layout from "../components/Layout";

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

import "./comics.css";

const IndexPage = ({data}: PageProps<Queries.AllComicsQuery>) => {
  return (
    <Layout>
      <p>
        {`I'm an independent comic artist focused on creating short stories with
        cute art and emotional themes. My work is available to read both for
        free online and `}
        <a href="https://store.tiffatiel.com/" target="_blank" rel="noreferrer">
          in print
        </a>
        .
        {data.allComicsYaml?.nodes.map(c => (
          <div key={c.id} className="comic">
            <Link to={`/comics/${c.slug}`}>
              <GatsbyImage
                loading="eager"
                image={getImage(c.cover?.outerFront?.childImageSharp)}
                alt={`${c.name}`}
                style={{minWidth: 200}}
              />
            </Link>
            <div className="comic-description">
              <h2>
                <Link to={`/comics/${c.slug}`}>{c.name}</Link> ({c.year})
              </h2>
              <p>{c.description}</p>
              <ul className="reading-options">
                <li>
                  <Link to={`/comics/${c.slug}`}>
                    <FontAwesomeIcon icon={faGlobe} width="12" size="lg" />
                    This site
                  </Link>
                </li>
                <AvailableOn
                  link={c.links?.store}
                  name="Print"
                  faIcon={faBook}
                />
                <AvailableOn link={c.links?.webtoons} name="Webtoons" />
                <AvailableOn link={c.links?.tapas} name="Tapas" />
                <AvailableOn
                  link={c.links?.tumblr}
                  name="Tumblr"
                  faIcon={faTumblr}
                />
                <AvailableOn
                  link={c.links?.bluesky}
                  name="BlueSky"
                  faIcon={faBluesky}
                />
                <AvailableOn link={c.links?.x} name="X" faIcon={faXTwitter} />
                <AvailableOn
                  link={c.links?.instagram}
                  name="Instagram"
                  faIcon={faInstagram}
                />
                <AvailableOn
                  link={c.links?.facebook}
                  name="Facebook"
                  faIcon={faFacebookF}
                />
              </ul>
            </div>
          </div>
        ))}
      </p>
    </Layout>
  );
};

interface AvailableOnProps {
  link?: string | null;
  name: string;
  faIcon?: IconProp;
}

const AvailableOn = ({link, name, faIcon}: AvailableOnProps) => {
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

export const query = graphql`
  query AllComics {
    allComicsYaml {
      nodes {
        name
        slug
        year
        id
        description
        links {
          store
          webtoons
          tapas
          tumblr
          bluesky
          x
          instagram
          facebook
        }
        cover {
          outerFront {
            childImageSharp {
              gatsbyImageData(width: 200, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
