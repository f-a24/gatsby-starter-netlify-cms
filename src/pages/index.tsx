import React, { FC } from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';

type Props = { data: any };

const Top: FC<Props> = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Layout>
      <TopSection>
        <TopTitle>Atsushi Fujisawa</TopTitle>
        <TopJob>
          <p>Main job : LoveLiver</p>
          <p>Side job : Front-end Developer</p>
        </TopJob>
        <TopBtn to="/about">more</TopBtn>
      </TopSection>
      <section>
        <BlogTitle>
          <Link to="/blog">Blog</Link>
        </BlogTitle>
        <BlogContent>
          {posts.map(({ node: post }: any) => {
            const { excerpt, fields, frontmatter, id } = post;
            const { date, thumbnail, title } = frontmatter;

            return (
              <Content key={id} to={fields.slug}>
                <ContentThumbnail
                  thumbnail={
                    thumbnail.childImageSharp
                      ? thumbnail.childImageSharp.fluid.src
                      : thumbnail
                  }
                />
                <ContentText>
                  <div>
                    <p>{title}</p>
                    <p>{excerpt}</p>
                  </div>
                  <p>{date}</p>
                </ContentText>
              </Content>
            );
          })}
          <BlogMoreBtn to="/blog">more</BlogMoreBtn>
        </BlogContent>
      </section>
    </Layout>
  );
};

export default Top;

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
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;

const TopSection = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  color: #fff;
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(
      to right bottom,
      rgb(242, 74, 164),
      rgb(0, 173, 254) 50%,
      rgba(255, 255, 255, 0) 51%
    );
  }
  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(
      to right bottom,
      rgba(255, 255, 255, 0) 50%,
      rgb(242, 74, 164) 51%,
      rgb(0, 173, 254)
    );
  }
  h1,
  p,
  a {
    color: rgb(242, 74, 164);
    background: linear-gradient(
      to right bottom,
      rgb(242, 74, 164),
      rgb(0, 173, 254)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const TopTitle = styled.h1`
  position: relative;
  width: 100%;
  font-size: 5rem;
  font-weight: bolder;
  padding: 1rem 2rem 0;
  &::before {
    position: absolute;
    content: '';
    display: block;
    height: 2px;
    width: 100%;
    background: linear-gradient(to right, rgb(242, 74, 164), rgb(0, 173, 254));
    bottom: 0;
    right: 0;
  }
`;

const TopJob = styled.div`
  font-size: 2rem;
  padding-left: 3rem;
`;

const TopBtn = styled(Link)`
  position: relative;
  font-size: 2rem;
  text-decoration: none;
  margin-left: 3rem;
  padding: 0 1rem;
  border-left: 1px solid rgb(242, 74, 164);
  border-right: 1px solid rgb(0, 173, 254);
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

const BlogTitle = styled.p`
  position: relative;
  a {
    display: inline-block;
    padding: 1rem 2rem;
    font-size: 3rem;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
  }
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    z-index: -1;
    background: linear-gradient(
      to right bottom,
      rgb(242, 74, 164),
      rgb(0, 173, 254) 50%,
      rgba(255, 255, 255, 0) 51%
    );
  }
`;

const BlogContent = styled.div`
  margin-top: 3rem;
  padding: 0 2rem;
`;

const Content = styled(Link)`
  width: 90%;
  margin: 0 auto 2rem;
  padding: 1rem;
  display: flex;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: box-shadow 0.5s, transform 0.5s;
  background-color: #fff;
  border-left: 1px solid rgb(242, 74, 164);
  border-right: 1px solid rgb(0, 173, 254);
  text-decoration: none;
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
  > div {
    padding: 1rem;
  }
  &:hover {
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
    transform: translateY(-0.3em);
  }
`;

const ContentThumbnail = styled.div<{ thumbnail: string }>`
  background-image: url(${({ thumbnail }) => thumbnail});
  background-repeat: no-repeat;
  background-size: cover;
  width: 30%;
`;

const ContentText = styled.div`
  color: #333;
  width: 70%;
  padding: 0 1.5rem;
  background-color: #fff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  > div > p:first-child {
    font-size: 2rem;
    font-weight: bolder;
    color: rgb(242, 74, 164);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 1rem;
  }
  > p:last-child {
    text-align: right;
    padding-top: 1rem;
  }
`;

const BlogMoreBtn = styled(Link)`
  color: rgb(242, 74, 164);
  background: linear-gradient(
    to right bottom,
    rgb(242, 74, 164),
    rgb(0, 173, 254)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 3rem;
  text-decoration: none;
  margin: 3rem auto;
  padding: 1rem;
  text-align: center;
  border-left: 1px solid rgb(242, 74, 164);
  border-right: 1px solid rgb(0, 173, 254);
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
