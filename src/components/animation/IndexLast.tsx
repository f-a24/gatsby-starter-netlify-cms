import React from 'react';
import styled, { keyframes } from 'styled-components';
import color from './color';

export default ({ animEnd }: { animEnd: () => void }) => (
  <AnimArea>
    <LastAnim>
      <LastSub onAnimationEnd={animEnd} />
      <LastSub />
    </LastAnim>
  </AnimArea>
);

const areaAnim = keyframes`
  0% {
    background-color: #EE55B7;
  }
  50% {
    background-color: #FFF;
  }
  80% {
    background-color: rgba(255, 255, 255, 0);
  }
  100% {
    background-color: rgba(255, 255, 255, 0);
  }
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

const AnimArea = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  animation: ${areaAnim} 3s;
  z-index:10;
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
    background-color: ${color.aqours.default};
    transform: translate(-100%, 0%);
    animation: ${p1Anim} 3s;
  }
  &:nth-of-type(2) {
    background-color: ${color.muse.default};
    transform: translate(100%, 0%);
    animation: ${p2Anim} 3s;
  }
`;
