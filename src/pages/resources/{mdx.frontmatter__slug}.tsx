import * as React from "react";
import {graphql, Link, PageProps} from "gatsby";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";

const ResourcesPage = ({data, children}: PageProps<Queries.ResourceQuery>) => {
  const {mdx} = data;
  return (
    <Layout>
      <Link to="/resources" style={{display: "block", marginBottom: "16px"}}>
        &larr; Back to resources
      </Link>
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

export const Head = ({data}: PageProps<Queries.ResourceQuery>) => (
  <Seo title={data.mdx?.frontmatter?.title} />
);

export default ResourcesPage;
