import React, { useContext } from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import IndexStart from '../components/animation/IndexStart';
import IndexSecond from '../components/animation/IndexSecond';
import IndexLast from '../components/animation/IndexLast';
import { Store } from '../store';

export default ({ data }) => {
  const { state, dispatch } = useContext(Store);
  const { chapterNo } = state;
  const { edges: posts } = data.allMarkdownRemark;
  console.log(data.allMarkdownRemark.edges, posts);
  return (
    <Layout>
      {(chapterNo === 0 && (
        <IndexStart animEnd={() => {
          dispatch({ type: 'ADD_NO' });
        }} />
      )) ||
        (chapterNo === 1 && (
          <IndexSecond animEnd={() => {
            dispatch({ type: 'ADD_NO' });
          }} />
        )) || (
          <>
            <section className="home-top-section">
              <h1 className="home-top-title">Atsushi Fujisawa</h1>
              <div className="home-top-job">
                <p>Main job : LoveLiver</p>
                <p>Side job : Front-end Developer</p>
              </div>
              <Link className="home-top-btn" to="/about">
                more
              </Link>
            </section>
            <section className="home-blog-section">
              <p className="home-blog-title">
                <span>Blog</span>
              </p>
              <div className="home-blog-content">
                {posts.map(({ node: post }) => (
                  <Link
                    className="home-content"
                    key={post.id}
                    to={post.fields.slug}
                  >
                    <div className="home-content-color" />
                    <div className="home-content-text">
                      <p>{post.frontmatter.title}</p>
                      <p>{post.excerpt}</p>
                      <p>{post.frontmatter.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
            <IndexLast />
          </>
        )}
    </Layout>
  );
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;