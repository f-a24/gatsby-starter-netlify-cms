import React from 'react';
import styled, { keyframes } from 'styled-components';

export default ({ animEnd }: { animEnd: () => void }) => (
  <StartAnim>
    <StarBase onAnimationEnd={animEnd}>
      <StarSub />
      <StarSub />
    </StarBase>
  </StartAnim>
);
const anim = keyframes`
  from {
    top: -100px;
    transform: rotateY(0);
  }
  to {
    top: calc(50vh - 50px);
    transform: rotateY(1turn);
  }
`;

const StartAnim = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: #000;
  z-index: 10;
`;

const StarBase = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  left: calc(50vw - 50px);
  background: radial-gradient(rgba(255, 255, 255, 0.5), rgba(255, 204, 0, 0.3));
  animation: ${anim} 1s forwards;
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
