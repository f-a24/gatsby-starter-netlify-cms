import React from 'react';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';

export default ({ data, pageContext }) => (
  <Layout>
    <section className="section">
      <Helmet title={`${pageContext.tag} | ${data.site.siteMetadata.title}`} />
      <TagHeader>
        {`${data.allMarkdownRemark.totalCount} post${
          data.allMarkdownRemark.totalCount === 1 ? '' : 's'
        } tagged with “${pageContext.tag}”`}
      </TagHeader>
      <BlogList>
        {data.allMarkdownRemark.edges.map(post => (
          <BlogItem to={post.node.fields.slug} key={post.node.fields.slug}>
            <BlogTitle>{post.node.frontmatter.title}</BlogTitle>
          </BlogItem>
        ))}
      </BlogList>
      <AllTags>
        <AllTagsBtn to="/tags/">Browse all tags</AllTagsBtn>
      </AllTags>
    </section>
  </Layout>
);

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;

const TagHeader = styled.h1`
  padding: 0.5rem 2rem 1rem;
  background: linear-gradient(
    to right bottom,
    rgb(242, 74, 164),
    rgb(0, 173, 254) 50%,
    rgba(255, 255, 255, 0) 51%
  );
  font-size: 1.5rem;
  color: #fff;
`;

const BlogList = styled.section`
  width: 80%;
  margin: 2rem auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const BlogItem = styled(Link)`
  width: 100%;
  padding: 2rem;
  position: relative;
  border-left: 1px solid rgb(242, 74, 164);
  border-right: 1px solid rgb(0, 173, 254);
  background-color: #fff;
  margin-bottom: 2rem;
  color: #000;
  text-decoration: none;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  &:before,
  &:after {
    position: absolute;
    content: '';
    display: block;
    height: 1px;
    width: 100%;
    background: linear-gradient(to right, rgb(242, 74, 164), rgb(0, 173, 254));
  }
  &::before {
    top: 0;
    left: 0;
  }
  &::after {
    bottom: 0;
    right: 0;
  }
`;

const BlogTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: rgb(242, 74, 164);
  background: linear-gradient(
    to right bottom,
    rgb(242, 74, 164),
    rgb(0, 173, 254)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const AllTags = styled.p`
  text-align: center;
`;

const AllTagsBtn = styled(Link)`
  position: relative;
  text-decoration: none;
  margin-left: 3rem;
  padding: 0.5rem 1rem;
  border-left: 1px solid rgb(242, 74, 164);
  border-right: 1px solid rgb(0, 173, 254);
  color: rgb(242, 74, 164);
  background: linear-gradient(
    to right bottom,
    rgb(242, 74, 164),
    rgb(0, 173, 254)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  &:before,
  &:after {
    position: absolute;
    content: '';
    display: block;
    height: 1px;
    width: 100%;
    background: linear-gradient(to right, rgb(242, 74, 164), rgb(0, 173, 254));
  }
  &::before {
    top: 0;
    left: 0;
  }
  &::after {
    bottom: 0;
    right: 0;
  }
  &:hover {
    -webkit-text-fill-color: #fff;
    border: none;
    color: #fff;
    background: linear-gradient(
      to right bottom,
      rgb(242, 74, 164),
      rgb(0, 173, 254)
    );
    cursor: pointer;
    &:before,
    &:after {
      display: none;
    }
  }
`;
