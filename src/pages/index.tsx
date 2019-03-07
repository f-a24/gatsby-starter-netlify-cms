import React, { useContext } from 'react';
import { Link, graphql } from 'gatsby';
import styled, { keyframes } from 'styled-components';
import Layout from '../components/Layout';
import {Store, Provider} from '../store'

const App = ({ data }) => {
  const { state, dispatch } = useContext(Store);
  const { chapterNo } = state;
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Layout>
      {(chapterNo === 0 && (
        <StartAnim>
          <StarBase
            onAnimationEnd={() => {
              dispatch({ type: 'ADD_NO' });
            }}
          >
            <StarSub />
            <StarSub />
          </StarBase>
        </StartAnim>
      )) ||
        (chapterNo === 1 && (
          <>
            <SecondAnim />
            <SecondAnim />
            <SecondAnim />
            <SecondAnim />
            <SecondAnim />
            <SecondAnim />
            <SecondAnim />
            <SecondAnim />
            <SecondAnim
              onAnimationEnd={() => {
                dispatch({ type: 'ADD_NO' });
              }}
            />
          </>
        )) || (
          <>
            <section className="home-top-section">
              <h1 className="home-top-title">Atsushi Fujisawa</h1>
              <div className="home-top-job">
                <p>Main job : LoveLiver</p>
                <p>Side job : Front-end Developer</p>
              </div>
              <Link className="home-top-btn" to="/about">
                more
              </Link>
            </section>
            <section className="home-blog-section">
              <p className="home-blog-title">
                <span>Blog</span>
              </p>
              <div className="home-blog-content">
                {posts.map(({ node: post }, i) => (
                  <Link
                    className="home-content"
                    key={post.id}
                    to={post.fields.slug}
                  >
                    <div className="home-content-color" />
                    <div className="home-content-text">
                      <p>{post.frontmatter.title}</p>
                      <p>{post.excerpt}</p>
                      <p>{post.frontmatter.date}</p>
                    </div>
                    {/* <div className="foo" data-inverted={i % 2 === 0 ? "μ" : "A"}>{i % 2 === 0 ? "μ" : "A"}</div> */}
                  </Link>
                ))}
              </div>
            </section>
            <LastAnim>
              <LastSub />
              <LastSub />
            </LastAnim>
          </>
        )}
    </Layout>
  );
};

export default ({ data }) => {
  return (
    <Provider>
      <App data={data} />
    </Provider>
  );
};
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
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;

const kirakira = keyframes`
  from {
    top: -100px;
  }
  to {
    top: calc(50vh - 50px);
  }
`;
const anim = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

const StartAnim = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: #000;
`;

const StarBase = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  left: calc(50vw - 50px);
  background: radial-gradient(rgba(255, 255, 255, 0.5), rgba(255, 204, 0, 0.3));
  animation: ${kirakira} 1s forwards;
  &::before {
    content: '';
    display: brock;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0.7;
    background: radial-gradient(
      #fff,
      rgba(255, 204, 0, 0.7) 40%,
      rgba(0, 0, 0, 0) 70%
    );
  }
`;

const StarSub = styled.p`
  &::before,
  &::after {
    content: '';
    display: brock;
    position: absolute;
    width: 50%;
    height: 50%;
    background-color: #000;
  }
  &:first-of-type::before {
    top: 0;
    left: 0;
    border-bottom-right-radius: 50% 80%;
    box-shadow: inset -5px -5px 10px -5px rgba(255, 204, 0, 0.3);
  }
  &:first-of-type::after {
    bottom: 0;
    left: 0;
    border-top-right-radius: 50% 80%;
    box-shadow: inset -5px 5px 10px -5px rgba(255, 204, 0, 0.3);
  }
  &:last-of-type::before {
    top: 0;
    right: 0;
    border-bottom-left-radius: 50% 80%;
    box-shadow: inset 5px -5px 10px -5px rgba(255, 204, 0, 0.3);
  }
  &:last-of-type::after {
    bottom: 0;
    right: 0;
    border-top-left-radius: 50% 80%;
    box-shadow: inset 5px 5px 10px -5px rgba(255, 204, 0, 0.3);
  }
`;
const aqours = {
  chika: '#FF791B',
  riko: '#FF7777',
  kanan: '#00D29E',
  dia: '#F43132',
  you: '#2AA4DB',
  yohane: '#AEAEAE',
  zura: '#CFBA11',
  mari: '#A530E0',
  ruby: '#EE55B7'
};

const SecondAnim = styled.div`
  position: absolute;
  width: 120vmax;
  height: 120vmax;
  top: calc(50% - 60vmax);
  left: calc(50% - 60vmax);
  border-radius: 100%;
  animation: ${anim} 1s forwards;
  z-index: 3;
  transform: scale(0);
  ${() =>
    Object.keys(aqours).reduce(
      (a, c, i) => `
    ${a}&:nth-of-type(${i + 1}) {
      background-color: ${aqours[c]};
      animation-delay: .${i}s;
    }`,
      ''
    )}
`;
const divAnim = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(1turn);
  }
`;

const p1Anim = keyframes`
  0% {
    transform: translate(0%, 100%);
  }
  20% {
    transform: translate(0%, 0%);
  }
  80% {
    transform: translate(0%, 0%);
  }
  100% {
    transform: translate(-100%, 0%);
  }
`;

const p2Anim = keyframes`
  0% {
    transform: translate(0%, -100%);
  }
  20% {
    transform: translate(0%, 0%);
  }
  80% {
    transform: translate(0%, 0%);
  }
  100% {
    transform: translate(100%, 0%);
  }
`;

const LastAnim = styled.div`
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  animation: ${divAnim} 1.2s forwards;
  animation-delay: 0.6s;
`;

const LastSub = styled.p`
  position: relative;
  float: left;
  width: 50%;
  height: 100%;
  &:nth-of-type(1) {
    background-color: #00adfe;
    transform: translate(-100%, 0%);
    animation: ${p1Anim} 3s;
  }
  &:nth-of-type(2) {
    background-color: #f24aa4;
    transform: translate(100%, 0%);
    animation: ${p2Anim} 3s;
  }
`;
