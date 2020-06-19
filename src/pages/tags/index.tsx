import React from 'react';
import { kebabCase } from 'lodash';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../../components/Layout';

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title }
    }
  }
}) => (
  <Layout>
    <section className="section">
      <Helmet title={`Tags | ${title}`} />
      <TagHeader>Tags</TagHeader>
      <TagList>
        {group.map(tag => (
          <TagItem key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </TagItem>
        ))}
      </TagList>
    </section>
  </Layout>
);

export default TagsPage;

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;

const TagHeader = styled.h1`
  padding: 0 2rem 1rem;
  background: linear-gradient(
    to right bottom,
    rgb(242, 74, 164),
    rgb(0, 173, 254) 50%,
    rgba(255, 255, 255, 0) 51%
  );
  font-size: 3rem;
  color: #fff;
`;

const TagList = styled.ul`
  padding: 2rem;
  display: flex;
  justify-content: left;
  align-items: center;
`;

const TagItem = styled.li`
  position: relative;
  padding: 0.5rem 1rem;
  border-left: 1px solid rgb(242, 74, 164);
  border-right: 1px solid rgb(0, 173, 254);
  margin-right: 1rem;
  & > a {
    text-decoration: none;
    color: rgb(242, 74, 164);
    background: linear-gradient(
      to right bottom,
      rgb(242, 74, 164),
      rgb(0, 173, 254)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
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
    border: none;
    background: linear-gradient(
      to right bottom,
      rgb(242, 74, 164),
      rgb(0, 173, 254)
    );
    cursor: pointer;
    & > a {
      -webkit-text-fill-color: #fff;
      color: #fff;
    }
    &:before,
    &:after {
      display: none;
    }
  }
`;
