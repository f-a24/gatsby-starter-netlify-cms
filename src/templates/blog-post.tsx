import React from "react";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

type TempType = {
  content: string;
  contentComponent: typeof HTMLContent;
  description: string;
  tags: string[];
  title: string;
  helmet: JSX.Element;
};

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet
}: TempType) => {
  const PostContent = contentComponent || Content;

  return (
    <>
      {helmet || ""}
      <BlogHeader>Blog</BlogHeader>
      <BlogContent>
        <BlogTitle>{title}</BlogTitle>
        <BlogDescription>{description}</BlogDescription>
        <PostContent className="" content={content} />
        {tags && tags.length ? (
          <TagsBlock>
            <TagsTitle>Tags</TagsTitle>
            <TagList>
              {tags.map(tag => (
                <TagItem key={tag + `tag`}>
                  <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                </TagItem>
              ))}
            </TagList>
          </TagsBlock>
        ) : null}
      </BlogContent>
    </>
  );
};

type PostType = {
  markdownRemark: {
    id: string;
    html: string;
    frontmatter: {
      date: string;
      title: string;
      description: string;
      tags: string[];
    };
  };
};

const BlogPost = ({ data }: { data: PostType }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

export default BlogPost;

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
`;

const BlogContent = styled.section`
  width: 80%;
  margin: 2rem auto;
  padding: 1rem 2rem;
  background-color: #fff;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
`;
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
const BlogTitle = styled.h1`
  margin: 1.5rem 0;
  font-size: 2.5rem;
  font-weight: bold;
`;

const BlogDescription = styled.p`
  margin-bottom: 1.5rem;
`;

const TagsBlock = styled.div`
  margin-top: 4rem;
`;

const TagsTitle = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const TagList = styled.ul`
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
    content: "";
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
