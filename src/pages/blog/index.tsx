import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import BlogRoll from '../../components/BlogRoll';

export default () => (
  <Layout>
    <BlogHeader>
      <Link to="/blog">Blog</Link>
    </BlogHeader>
    <BlogList>
      <BlogRoll />
    </BlogList>
  </Layout>
);

const BlogHeader = styled.div`
  padding: 0 2rem 1rem;
  background: linear-gradient(
    to right bottom,
    rgb(242, 74, 164),
    rgb(0, 173, 254) 50%,
    rgba(255, 255, 255, 0) 51%
  );
  > a {
    font-size: 3rem;
    color: #fff;
    text-decoration: none;
  }
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
