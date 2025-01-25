import * as React from "react";
import {graphql, Link, PageProps} from "gatsby";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";

const ResourcesPage = ({data}: PageProps<Queries.AllResourcesQuery>) => {
  return (
    <Layout>
      <h1>Resources</h1>
      <p>
        {`I get a lot of joy out of helping others be creative and have fun.
        I enjoy looking for ways to share things I've learned or things that
        have helped me on my creative journey. On this page, I collect the
        different resources I've created. If you find any of the things I've
        created helpful, I'd love to hear from you!`}
      </p>
      {data.allMdx.nodes.map(node => {
        const link = `/resources/${node.frontmatter?.slug}`;
        return (
          <article key={node.id}>
            <h2>
              <Link to={link}>{node.frontmatter?.title}</Link>
            </h2>
            <p>
              <em>Published {node.frontmatter?.created}</em>
            </p>
            <p>
              {node.excerpt}
              <Link to={link}>Read more</Link>
            </p>
          </article>
        );
      })}
    </Layout>
  );
};

export const query = graphql`
  query AllResources {
    allMdx(sort: {frontmatter: {created: DESC}}) {
      nodes {
        frontmatter {
          created
          title
          slug
        }
        excerpt
        id
      }
    }
  }
`;

export const Head = () => <Seo title="Resources" />;

export default ResourcesPage;
