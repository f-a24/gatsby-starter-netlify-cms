import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';

export const AboutPageTemplate = ({ title, profile }) => {
  return (
    <>
      <AboutTitle>{title}</AboutTitle>
      <Profile>
        <p>{profile}</p>
      </Profile>
      <History>
        <HistoryTitle>
          <span>History</span>
        </HistoryTitle>
      </History>
      <Skills>
        <HistoryTitle>
          <span>Skills</span>
        </HistoryTitle>
      </Skills>
    </>
  );
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        title={post.frontmatter.title}
        profile={post.frontmatter.profile}
      />
    </Layout>
  );
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        hoge
        profile
      }
    }
  }
`;

const AboutTitle = styled.h1`
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

const Profile = styled.section`
  position: relative;
  height: 1000px;
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
`;

const History = styled.section`
  position: relative;
  height: 1000px;
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
`;

const HistoryTitle = styled.p`
  position: relative;
  span {
    display: inline-block;
    padding: 1rem 2rem;
    font-size: 3rem;
    color: #fff;
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

const Skills = styled.section``;
