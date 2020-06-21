import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import BlogRoll from '../../components/BlogRoll';

const Blog: React.FC = () => (
  <Layout>
    <>
      <BlogHeader>
        <Link to="/blog">Blog</Link>
      </BlogHeader>
      <BlogList>
        <BlogRoll />
      </BlogList>
    </>
  </Layout>
);

export default Blog;

const BlogHeader = styled.div`
  padding: 1rem;
  background: linear-gradient(
    to right bottom,
    rgb(242, 74, 164),
    rgb(0, 173, 254) 50%,
    rgba(255, 255, 255, 0) 51%
  );
  > a {
    font-size: 2rem;
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
