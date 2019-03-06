import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"
import styled, {keyframes} from 'styled-components';
import Navbar from './Navbar'

import './all.scss'

export default ({ children }) => {
  const [stepNumber, setStepNumber] = React.useState(0);
  return (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
          site {
            siteMetadata {
              title,
              description,
            }
          }
        }
    `}
    render={data => (
      <div>
        <Helmet>
          <html lang="ja" />
          <title>{data.site.siteMetadata.title}</title>
          <meta name="description" content={data.site.siteMetadata.description} />
          
          <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png" />
	        <link rel="icon" type="image/png" href="/img/favicon-32x32.png" sizes="32x32" />
	        <link rel="icon" type="image/png" href="/img/favicon-16x16.png" sizes="16x16" />
	
	        <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#ff4400" />
	        <meta name="theme-color" content="#fff" />

	        <meta property="og:type" content="business.business" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="/img/og-image.jpg" />
        </Helmet>
          {(stepNumber === 0 &&
          (<StartAnim>
            <StarBase  onAnimationEnd={() => {setStepNumber(1)}}>
              <StarSub />
              <StarSub />
            </StarBase>
          </StartAnim>)) ||
          (stepNumber === 1 &&
            (
              <>
              <SecondAnim />
              <SecondAnim />
              <SecondAnim />
              <SecondAnim />
              <SecondAnim />
              <SecondAnim />
              <SecondAnim />
              <SecondAnim />
              <SecondAnim onAnimationEnd={() => {setStepNumber(2)}} />   
              </>
            )) ||
            (
              <>
              {(stepNumber === 3 && (
                <>
                <Navbar />
              <div>{children}</div>
              <section className="footer">
                <p>Copyright © 2019 @f-a24 All Rights Reserved.</p>
              </section>
                </>
              ))}
              <LastAnim  onAnimationEnd={() => {setStepNumber(3)}}>
                <LastSub />
                <LastSub />
              </LastAnim>
              </>
            )
          }
      </div>
    )}
  />
)}

const kirakira = keyframes`
  from {
    top: -100px;
  }
  to {
    top: calc(50vh - 50px);
  }
`
const anim = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`

const StartAnim = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: #000;
`;

const StarBase= styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  left: calc(50vw - 50px);
  background: radial-gradient(rgba(255, 255, 255, .5), rgba(255, 204, 0, .3));
  animation: ${kirakira} 1s forwards;
  &::before {
    content: '';
    display: brock;  
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: .7;
    background: radial-gradient(#fff, rgba(255, 204, 0, .7) 40%, rgba(0,0,0,0) 70%);
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
  box-shadow: inset -5px -5px 10px -5px rgba(255, 204, 0, .3);
}
&:first-of-type::after {
  bottom: 0;
  left: 0;
  border-top-right-radius: 50% 80%;
  box-shadow: inset -5px 5px 10px -5px rgba(255, 204, 0, .3);
}
&:last-of-type::before {
  top: 0;
  right: 0;
  border-bottom-left-radius: 50% 80%;
  box-shadow: inset 5px -5px 10px -5px rgba(255, 204, 0, .3);
}
&:last-of-type::after {
  bottom: 0;
  right: 0;
  border-top-left-radius: 50% 80%;
  box-shadow: inset 5px 5px 10px -5px rgba(255, 204, 0, .3);
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
}


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
  ${() => Object.keys(aqours).reduce((a, c, i) => `
    ${a}&:nth-of-type(${i+1}) {
      background-color: ${aqours[c]};
      animation-delay: .${i}s;
    }`, '')}
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
  animation-delay: .6s;
`;

const LastSub = styled.p`
  position: relative;
  float: left;
  width: 50%;
  height: 100%;
  &:nth-of-type(1) {
    background-color: #00adfe;
    transform:  translate(-100%, 0%);
    animation: ${p1Anim} 3s;
  }
  &:nth-of-type(2) {
    background-color: #f24aa4;
    transform: translate(100%, 0%);
    animation: ${p2Anim} 3s;
  }
`;
