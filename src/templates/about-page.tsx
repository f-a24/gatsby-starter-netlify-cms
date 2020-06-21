import * as React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';

const workingHistory = [
  {
    company: 'ISOPRA Inc.',
    period: '2014/4 ～ 2017/10',
    job: 'Web Developer',
    lang: ['Java', 'PHP', 'Perl', 'VB.Net', 'HTML', 'CSS', 'JavaScript']
  },
  {
    company: 'digitalstage Inc.',
    period: '2017/11 ～',
    job: 'Front-end Developer',
    lang: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'SCSS']
  }
];

export const AboutPageTemplate: React.FC<{ title: string }> = ({ title }) => {
  return (
    <>
      <AboutTitle>{title}</AboutTitle>
      <Profile>
        <ProfileContents>
          <ProfileText>
            <ProfileName>
              Atsushi Fujisawa(f-a24)
              <ProfileSocialIcon
                href="https://twitter.com/f_a24_"
                target="_blank"
                rel="noopener noreferrer"
              />
              <ProfileSocialIcon
                href="https://github.com/f-a24"
                target="_blank"
                rel="noopener noreferrer"
              />
              <ProfileSocialIcon
                href="https://codepen.io/a24/"
                target="_blank"
                rel="noopener noreferrer"
              />
            </ProfileName>
            <p>1993/7/13 (25)</p>
            <p>main job: LoveLiver</p>
            <p>
              side job: Working at digitalstage Inc. as a Front-end Developer
            </p>
            <p>hobby: LoveLove, alcohol, football, snowboarding</p>
          </ProfileText>
        </ProfileContents>
      </Profile>
      <History>
        <HistoryTitle>
          <span>History</span>
        </HistoryTitle>
        <HistoryContents>
          {workingHistory.map(w => (
            <HistoryItem>
              <p>{w.company}</p>
              <p>{w.period}</p>
              <p>{w.job}</p>
              <p>{w.lang.join(', ')}</p>
            </HistoryItem>
          ))}
        </HistoryContents>
        <HistoryBorder>
          {workingHistory.map(() => (
            <span />
          ))}
        </HistoryBorder>
      </History>
    </>
  );
};

type PostType = {
  markdownRemark: {
    frontmatter: {
      title: string;
      profile: string;
    };
  };
};

const AboutPage: React.FC<{ data: PostType }> = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <AboutPageTemplate title={post.frontmatter.title} />
    </Layout>
  );
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
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
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(
    to right bottom,
    rgb(242, 74, 164),
    rgb(0, 173, 254)
  );
`;

const ProfileImage = styled.img`
  display: inline-block;
  width: 20%;
  height: 100%;
  padding: 1rem;
`;

const ProfileText = styled.div`
  width: 80%;
  align-self: stretch;
  padding: 1rem 2rem;
  margin: 1rem 0;
  background-color: #fff;
  > p {
    margin-bottom: 1rem;
  }
`;

const ProfileName = styled.p`
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
`;

const ProfileSocialIcon = styled.a`
  display: inline-block;
  width: 2rem;
  margin: 0 1rem;
  > img {
    width: 100%;
    height: 100%;
  }
`;

const History = styled.section`
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

const HistoryContents = styled.ul`
  width: 80%;
  margin: 2rem auto 132px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  > li:nth-child(odd) {
    align-self: flex-start;
    &::before {
      right: -1rem;
      border-top: 1rem solid transparent;
      border-bottom: 1rem solid transparent;
      border-left: 1rem solid rgb(242, 74, 164);
    }
  }
  > :nth-child(even) {
    align-self: flex-end;
    &::before {
      left: -1rem;
      border-top: 1rem solid transparent;
      border-right: 1rem solid rgb(0, 173, 254);
      border-bottom: 1rem solid transparent;
    }
  }
`;

const HistoryItem = styled.li`
  width: 40%;
  background-color: #fff;
  padding: 1rem;
  margin: 1rem;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: calc(50% - 1rem);
  }
`;

const HistoryBorder = styled.div`
  position: absolute;
  top: 130px;
  left: calc(50% - 2px);
  width: 4px;
  height: calc(100% - 260px);
  background: linear-gradient(
    to right bottom,
    rgb(242, 74, 164),
    rgb(0, 173, 254)
  );
  > span {
    position: absolute;
    width: 3rem;
    height: 3rem;
    border: 0.5rem solid #fff;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    border-radius: 100%;
    top: 2rem;
    left: calc(-2rem + 2px);
    background: linear-gradient(
      to right bottom,
      rgb(242, 74, 164),
      rgb(0, 173, 254)
    );
  }
  > span:nth-child(2) {
    top: 10rem;
  }
`;

const Skills = styled.section``;

const SkillsContents = styled.div`
  width: 80%;
  margin: 2rem auto;
  background-color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
`;

const SkillsLink = styled.a`
  display: inline-block;
  width: 10%;
  margin: 1rem;
  padding: 1rem;
  > img {
    width: 100%;
    height: 100%;
  }
`;
