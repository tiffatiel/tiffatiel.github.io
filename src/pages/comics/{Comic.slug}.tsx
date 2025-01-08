import * as React from "react";
import Layout from "../../components/Layout";
import {graphql, PageProps} from "gatsby";

const ComicPage = ({data}: PageProps<Queries.ComicQuery>) => {
  const {comic} = data;
  if (!comic) throw "Comic not found";

  return (
    <Layout>
      <h1>{comic.name}</h1>
    </Layout>
  );
};

export const query = graphql`
  query Comic($id: String!) {
    comic(id: {eq: $id}) {
      name
      year
      id
      pageCount
    }
  }
`;

export default ComicPage;
