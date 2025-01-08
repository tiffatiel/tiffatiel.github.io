import * as React from "react";
import {graphql, Link, PageProps} from "gatsby";
import Layout from "../components/Layout";

const IndexPage = ({data}: PageProps<Queries.AllComicsQuery>) => {
  return (
    <Layout>
      <h1>My comics!</h1>
      <p>
        {`I'm an independent comic artist focused on creating short stories with
        cute art and emotional themes. My work is available to read both for
        free online and`}
        <a href="https://store.tiffatiel.com/" target="_blank" rel="noreferrer">
          in print
        </a>
        .
        {data.allComic?.nodes.map(c => (
          <div key={c.id}>
            <h2>
              <Link to={`/comics/${c.slug}`}>{c.name}</Link> ({c.year})
            </h2>
            <a href={c.links.store || ""} target="_blank" rel="noreferrer">
              Buy
            </a>
          </div>
        ))}
      </p>
    </Layout>
  );
};

export const query = graphql`
  query AllComics {
    allComic {
      nodes {
        name
        slug
        year
        id
        links {
          store
        }
      }
    }
  }
`;

export default IndexPage;
