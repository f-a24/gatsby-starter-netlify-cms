import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Navbar from './Navbar';
import Footer from './Footer';

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    overflow-x: hidden;
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
      <div>
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
        <div>{children}</div>
        <Footer />
      </div>
    )}
  />
);

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  background-image: linear-gradient(
      -45deg,
      rgba(0, 173, 254, 0.1) 25%,
      transparent 25%,
      transparent 50%,
      rgba(0, 173, 254, 0.1) 50%,
      rgba(0, 173, 254, 0.1) 75%,
      transparent 75%,
      transparent 100%
    ),
    linear-gradient(
      45deg,
      rgba(242, 74, 164, 0.1) 25%,
      transparent 25%,
      transparent 50%,
      rgba(242, 74, 164, 0.1) 50%,
      rgba(242, 74, 164, 0.1) 75%,
      transparent 75%,
      transparent 100%
    );
  background-size: 200px 200px;
  overflow-x: hidden;
`;
