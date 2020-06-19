import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import reset from 'styled-reset';
import Navbar from './Navbar';
import Footer from './Footer';

const GlobalStyle = createGlobalStyle`
  ${reset}
  html, body {
    overflow-x: hidden;
    height: 100%;
  }
`;

export default ({ children }: { children: JSX.Element }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <Contents>
        <Helmet>
          <html lang="ja" />
          <title>{data.site.siteMetadata.title}</title>
          <meta
            name="description"
            content={data.site.siteMetadata.description}
          />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/img/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            href="/img/favicon-32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="/img/favicon-16x16.png"
            sizes="16x16"
          />

          <link
            rel="mask-icon"
            href="/img/safari-pinned-tab.svg"
            color="#ff4400"
          />
          <meta name="theme-color" content="#fff" />

          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="/img/og-image.jpg" />
        </Helmet>
        <GlobalStyle />
        <Navbar />
        <Background />
        <>{children}</>
        <Footer />
      </Contents>
    )}
  />
);
const back_anim_a = keyframes`
  0% {
    background-position: 100%;
  }
  100% {
    background-position: 0%;
  };
`;

const back_anim_b = keyframes`
  0% {
    background-position: 0%;
  }
  100% {
    background-position: 100%;
  }
`;

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 4rem,
      rgba(242, 74, 164, 0.1) 4rem,
      rgba(242, 74, 164, 0.1) 8rem
    );
    background-size: 200% 200%;
    transform: translateZ(-100px);
    transform-origin: center;
    animation: ${back_anim_b} 30s linear infinite;
  }
  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 4rem,
      rgba(0, 173, 254, 0.1) 4rem,
      rgba(0, 173, 254, 0.1) 8rem
    );
    background-size: 200% 200%;
    transform: translateZ(-100px);
    transform-origin: center;
    animation: ${back_anim_a} 30s linear infinite;
  }
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
