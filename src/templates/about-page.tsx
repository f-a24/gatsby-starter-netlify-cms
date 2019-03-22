import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

export const AboutPageTemplate = ({
  title,
  image,
  profile,
  hoge,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section>
      <AboutTitle>{title}</AboutTitle>
      {image}
      <p>{profile}</p>
      <h1>{hoge}</h1>
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
        hoge={post.frontmatter.hoge}
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
        hoge
        profile
      }
    }
  }
`;

const AboutTitle = styled.h1`
  padding: 0 2rem 1rem;
  font-size: 3rem;
  color: #fff;
  background: linear-gradient(
    to right bottom,
    rgb(242, 74, 164),
    rgb(0, 173, 254) 50%,
    rgba(255, 255, 255, 0) 51%
  );
`;
