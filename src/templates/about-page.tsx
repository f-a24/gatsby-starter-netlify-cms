import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

export const AboutPageTemplate = ({
  title,
  image,
  profile,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="about-section">
      <h1 className="about-title">{title}</h1>
      {image}
      <p>{profile}</p>
      <PageContent className="content" content={content} />
    </section>
  );
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        profile={post.frontmatter.profile}
        content={post.html}
      />
    </Layout>
  );
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        profile
      }
    }
  }
`;
