import * as React from "react";
import {graphql, Link, PageProps} from "gatsby";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

import "./comics.css";
import {ReadingLinks} from "../components/ReadingLinks";

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
        {data.allComicsYaml?.nodes.map(c => {
          const link = `/comics/${c.slug}`;
          const image = c.cover?.outerFront?.childImageSharp;
          const imageData = getImage(image || null);

          return (
            <div key={c.id} className="comic">
              <Link to={link}>
                {imageData ? (
                  <GatsbyImage
                    loading="eager"
                    image={imageData}
                    alt={`${c.name}`}
                    style={{minWidth: 200}}
                  />
                ) : (
                  <></>
                )}
              </Link>
              <div className="comic-description">
                <h2>
                  <Link to={link}>{c.name}</Link> ({c.year})
                </h2>
                <p>{c.description}</p>
                <ReadingLinks siteLink={link} links={c.links} />
              </div>
            </div>
          );
        })}
      </p>
    </Layout>
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

export const Head = () => <Seo title="Comics" />;

export default IndexPage;
