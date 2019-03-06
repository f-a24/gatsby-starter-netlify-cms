import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
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
          {posts
              .map(({ node: post }, i) => (
                <Link 
                  className="home-content"
                  key={post.id}
                  to={post.fields.slug}
                >
                <div className="home-content-color" />
                <div className="home-content-text">
                <p>
                      {post.frontmatter.title}
                  </p>
                  <p>
                    {post.excerpt}
                  </p>
                  <p>
                  {post.frontmatter.date}
                  </p>
                </div>
                {/* <div className="foo" data-inverted={i % 2 === 0 ? "μ" : "A"}>{i % 2 === 0 ? "μ" : "A"}</div> */}
                </Link>
              ))}
          </div>
        </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
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
`
