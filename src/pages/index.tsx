import * as React from "react";
import {graphql, Link, PageProps} from "gatsby";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import Layout from "../components/Layout";

const IndexPage = ({data}: PageProps<Queries.AllComicsQuery>) => {
  return (
    <Layout>
      <h1>My comics!</h1>
      <p>
        {`I'm an independent comic artist focused on creating short stories with
        cute art and emotional themes. My work is available to read both for
        free online and `}
        <a href="https://store.tiffatiel.com/" target="_blank" rel="noreferrer">
          in print
        </a>
        .
        {data.allComicsYaml?.nodes.map(c => (
          <div key={c.id} style={{display: "flex", flexDirection: "row"}}>
            <Link to={`/comics/${c.slug}`}>
              <GatsbyImage
                loading="eager"
                image={getImage(c.cover?.outerFront?.childImageSharp)}
                style={{minWidth: 200}}
                alt={`${c.name}`}
              />
            </Link>
            <div>
              <h2>
                <Link to={`/comics/${c.slug}`}>{c.name}</Link> ({c.year})
              </h2>
              <p>{c.description}</p>
              <p>Available on:</p>
              <ul>
                <li>
                  <Link to={`/comics/${c.slug}`}>This site</Link>
                </li>
                <AvailableOn link={c.links?.store} name="Print" />
                <AvailableOn link={c.links?.webtoons} name="Webtoons" />
                <AvailableOn link={c.links?.tapas} name="Tapas" />
                <AvailableOn link={c.links?.x} name="X" />
                <AvailableOn link={c.links?.instagram} name="Instagram" />
                <AvailableOn link={c.links?.facebook} name="Facebook" />
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
}

const AvailableOn = ({link, name}: AvailableOnProps) => {
  if (!link) return <></>;
  return (
    <li>
      <a href={link || ""} target="_blank" rel="noreferrer">
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
