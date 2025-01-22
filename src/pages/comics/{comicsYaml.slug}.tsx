import * as React from "react";
import Layout from "../../components/Layout";
import {graphql, PageProps} from "gatsby";
import {GatsbyImage, getImage} from "gatsby-plugin-image";

const COMIC_PAGE_STYLE = {
  marginBottom: '32px',
};

const ComicPage = ({data}: PageProps<Queries.ComicQuery>) => {
  const comic = data.comicsYaml;
  if (!comic) throw "Comic not found";

  return (
    <Layout>
      <h1>{comic.name}</h1>
      <GatsbyImage
        style={COMIC_PAGE_STYLE}
        image={getImage(comic.cover?.outerFront?.childImageSharp)}
        alt={`${comic.name} Front Cover`}
      />
      {(comic.pages || []).map((page, i) => (
        <GatsbyImage
          style={COMIC_PAGE_STYLE}
          key={page.name}
          image={getImage(page.childImageSharp)}
          alt={`${comic.name} Page ${i + 1}`}
        />
      ))}
      <GatsbyImage
        style={COMIC_PAGE_STYLE}
        image={getImage(comic.cover?.outerBack?.childImageSharp)}
        alt={`${comic.name} Back Cover`}
      />
    </Layout>
  );
};

export const query = graphql`
  query Comic($id: String!) {
    comicsYaml(id: {eq: $id}) {
      name
      slug
      year
      id
      cover {
        outerFront {
          childImageSharp {
            gatsbyImageData(width: 700, placeholder: BLURRED)
          }
        }
        outerBack {
          childImageSharp {
            gatsbyImageData(width: 700, placeholder: BLURRED)
          }
        }
      }
      pages {
        name
        childImageSharp {
          gatsbyImageData(width: 700, placeholder: BLURRED)
        }
      }
    }
  }
`;

export default ComicPage;
