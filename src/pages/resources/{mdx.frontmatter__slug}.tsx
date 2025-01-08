import * as React from "react";
import {graphql, Link, PageProps} from "gatsby";
import Layout from "../../components/Layout";

const ResourcesPage = ({data, children}: PageProps<Queries.ResourceQuery>) => {
  const {mdx} = data;
  return (
    <Layout>
      <Link to="/resources">Back to resources</Link>
      <h1>{mdx?.frontmatter?.title}</h1>
      {children}
    </Layout>
  );
};

export const query = graphql`
  query Resource($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
      }
    }
  }
`;

export default ResourcesPage;
