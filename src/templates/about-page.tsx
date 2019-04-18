import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';

export const AboutPageTemplate = ({
  title,
  profile
}: {
  title: string;
  profile: string;
}) => (
  <>
    <AboutTitle>{title}</AboutTitle>
    <Profile>
      <ProfileContents>
        <ProfileImage />
        <ProfileText>{profile}</ProfileText>
      </ProfileContents>
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

type PostType = {
  markdownRemark: {
    frontmatter: {
      title: string;
      profile: string;
    };
  };
};

export default ({ data }: { data: PostType }) => {
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

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        profile
      }
    }
  }
`;

const AboutTitle = styled.h1`
  padding: 1rem;
  font-size: 2rem;
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

const ProfileContents = styled.div`
  display: flex;
  width: 80%;
  margin: 2rem auto 132px;
  justify-content: center;
`;

const ProfileImage = styled.div`
  width: 40%;
  height: 200px;
  background-color: aqua;
`;

const ProfileText = styled.div`
  width: 40%;
  padding: 1rem 2rem;
  background-color: #fff;
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
    padding: 2rem 1rem;
    font-size: 2rem;
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
