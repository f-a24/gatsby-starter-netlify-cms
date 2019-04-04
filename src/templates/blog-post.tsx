import React from 'react';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

type TempType = {
  content: string,
  contentComponent: typeof HTMLContent,
  description: string,
  tags: string[],
  title: string,
  helmet: JSX.Element
}

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}: TempType) => {
  const PostContent = contentComponent || Content

  return (
    <section>
      {helmet || ''}
      <BlogHeader>Blog</BlogHeader>
          <Title>{title}</Title>
            <p>{description}</p>
            <PostContent className="" content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
    </section>
  )
}

type PostType = {
  markdownRemark: {
    id: string,
    html: string,
    frontmatter: {
      date: string,
      title: string,
      description: string,
      tags: string[]
    }
  }
}

const BlogPost = ({ data }: {data: PostType}) => {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet
            titleTemplate="%s | Blog"
          >
            <title>{`${post.frontmatter.title}`}</title>
            <meta name="description" content={`${post.frontmatter.description}`} />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
const BlogHeader = styled.h1`
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
const Title = styled.h1`
  padding: 0 2rem 1rem;
  font-size: 2rem;
  color: #fff;
  background: linear-gradient(
    to right bottom,
    rgb(242, 74, 164),
    rgb(0, 173, 254) 50%,
    rgba(255, 255, 255, 0) 51%
  );
`;