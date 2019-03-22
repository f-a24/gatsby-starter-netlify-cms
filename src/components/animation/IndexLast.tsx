import React from 'react';
import styled, { keyframes } from 'styled-components';
import color from './color';

export default ({ animEnd }: { animEnd: () => void }) => (
  <LastAnim>
    <LastSub onAnimationEnd={animEnd} />
    <LastSub />
  </LastAnim>
);
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
