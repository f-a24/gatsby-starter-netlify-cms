import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

import profileIcon from '../img/profile.jpg';
import githubIcon from '../img/github-icon.svg';
import twitterIcon from '../img/twitter.svg';
import codepenIcon from '../img/codepen-icon.svg';

import html5Icon from '../img/html5.svg';
import css3Icon from '../img/css3.svg';
import sassIcon from '../img/sass.svg';
import javascriptIcon from '../img/javascript.svg';
import typescriptIcon from '../img/typescript.svg';
import reactIcon from '../img/react.svg';
import reduxIcon from '../img/redux.svg';
import nextjsIcon from '../img/nextjs.svg';
import gatsbyIcon from '../img/gatsby.svg';
import vueIcon from '../img/vue.svg';
import nuxtIcon from '../img/nuxt.svg';
import createjsIcon from '../img/createjs.svg';
import threeIcon from '../img/three.svg';
import webpackIcon from '../img/webpack.svg';
import nodejsIcon from '../img/nodejs.svg';
import expressIcon from '../img/express.svg';
import socketioIcon from '../img/socket.io.svg';
import phpIcon from '../img/php.svg';
import cakephpIcon from '../img/cakephp.svg';
import wordpressIcon from '../img/wordpress.svg';
import pythonIcon from '../img/python.svg';
import djangoIcon from '../img/django.svg';
import javaIcon from '../img/java.svg';
import springIcon from '../img/spring.svg';
import perlIcon from '../img/perl.svg';
import dotnetIcon from '../img/dotnet.svg';

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

export const AboutPageTemplate = ({ title }: { title: string }) => {
  // const PageContent = HTMLContent || Content;
  return (
    <>
      <AboutTitle>{title}</AboutTitle>
      <Profile>
        <ProfileContents>
          <ProfileImage src={profileIcon} alt="profile" />
          <ProfileText>
            <ProfileName>
              Atsushi Fujisawa(f-a24)
              <ProfileSocialIcon
  href="https://twitter.com/f_a24_"
  target="_blank"
  rel="noopener noreferrer"
>
  <img src={twitterIcon} alt="twitter" />
</ProfileSocialIcon>
              <ProfileSocialIcon
                href="https://github.com/f-a24"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={githubIcon} alt="github" />
              </ProfileSocialIcon>
              <ProfileSocialIcon
                href="https://codepen.io/a24/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={codepenIcon} alt="codepen" />
              </ProfileSocialIcon>
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
      <Skills>
        <HistoryTitle>
          <span>Skills</span>
        </HistoryTitle>
        <SkillsContents>
          <SkillsLink
            href="https://developer.mozilla.org/ja/docs/Web/Guide/HTML/HTML5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={html5Icon} alt="HTML5" />
          </SkillsLink>
          <SkillsLink
            href="https://developer.mozilla.org/ja/docs/Web/CSS/CSS3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={css3Icon} alt="CSS3" />
          </SkillsLink>
          <SkillsLink
            href="https://sass-lang.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={sassIcon} alt="SASS" />
          </SkillsLink>
          <SkillsLink
            href="https://developer.mozilla.org/ja/docs/Web/JavaScript"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={javascriptIcon} alt="JavaScript" />
          </SkillsLink>
          <SkillsLink
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={typescriptIcon} alt="TypeScript" />
          </SkillsLink>
          <SkillsLink
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={reactIcon} alt="React" />
          </SkillsLink>
          <SkillsLink
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={reduxIcon} alt="Redux" />
          </SkillsLink>
          <SkillsLink
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={nextjsIcon} alt="Next" />
          </SkillsLink>
          <SkillsLink
            href="https://www.gatsbyjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={gatsbyIcon} alt="Gatsby" />
          </SkillsLink>
          <SkillsLink
            href="https://jp.vuejs.org/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={vueIcon} alt="Vue" />
          </SkillsLink>
          <SkillsLink
            href="https://ja.nuxtjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={nuxtIcon} alt="Nuxt" />
          </SkillsLink>
          <SkillsLink
            href="https://createjs.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={createjsIcon} alt="CreateJS" />
          </SkillsLink>
          <SkillsLink
            href="https://threejs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={threeIcon} alt="three.js" />
          </SkillsLink>
          <SkillsLink
            href="https://webpack.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={webpackIcon} alt="webpack" />
          </SkillsLink>
          <SkillsLink
            href="https://nodejs.org/ja/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={nodejsIcon} alt="nodejs" />
          </SkillsLink>
          <SkillsLink
            href="https://expressjs.com/ja/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={expressIcon} alt="express" />
          </SkillsLink>
          <SkillsLink
            href="https://socket.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={socketioIcon} alt="socket.io" />
          </SkillsLink>
          <SkillsLink
            href="https://php.net/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={phpIcon} alt="php" />
          </SkillsLink>
          <SkillsLink
            href="https://cakephp.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={cakephpIcon} alt="cakephp" />
          </SkillsLink>
          <SkillsLink
            href="https://wordpress.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={wordpressIcon} alt="wordpress" />
          </SkillsLink>
          <SkillsLink
            href="https://www.python.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={pythonIcon} alt="python" />
          </SkillsLink>
          <SkillsLink
            href="https://www.djangoproject.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={djangoIcon} alt="django" />
          </SkillsLink>
          <SkillsLink
            href="https://www.java.com/ja/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={javaIcon} alt="java" />
          </SkillsLink>
          <SkillsLink
            href="https://spring.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={springIcon} alt="spring" />
          </SkillsLink>
          <SkillsLink
            href="https://www.perl.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={perlIcon} alt="perl" />
          </SkillsLink>
          <SkillsLink
            href="https://dotnet.microsoft.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={dotnetIcon} alt="dotnet" />
          </SkillsLink>
        </SkillsContents>
      </Skills>
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

export default ({ data }: { data: PostType }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <AboutPageTemplate title={post.frontmatter.title} />
    </Layout>
  );
};

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
