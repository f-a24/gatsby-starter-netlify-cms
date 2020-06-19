import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';

class BlogRoll extends React.Component<{ data: any }> {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <>
        {posts &&
          posts.map(({ node: post }: any) => (
            <BlogItem to={post.fields.slug} key={post.id}>
              <BlogTitle>{post.frontmatter.title}</BlogTitle>
              <BlogData>{post.frontmatter.date}</BlogData>
              <BlogContent>{post.excerpt}</BlogContent>
              {post.frontmatter.tags && post.frontmatter.tags.length ? (
                <TagList>
                  {post.frontmatter.tags.map((tag: any) => (
                    <TagItem key={tag + `tag`}>{tag}</TagItem>
                  ))}
                </TagList>
              ) : null}
            </BlogItem>
          ))}
      </>
    );
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
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
                tags
              }
            }
          }
        }
      }
    `}
    render={(data: any) => <BlogRoll data={data} />}
  />
);

const BlogItem = styled(Link)`
  width: 45%;
  padding: 1rem 2rem;
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
  margin-bottom: 1rem;
`;

const BlogData = styled.p`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const BlogContent = styled.p`
  margin-bottom: 1rem;
`;

const TagList = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const TagItem = styled.li`
  padding: 0.5rem 1rem;
  margin-left: 1rem;
  background: linear-gradient(
    to right bottom,
    rgb(242, 74, 164),
    rgb(0, 173, 254)
  );
  color: #fff;
`;
