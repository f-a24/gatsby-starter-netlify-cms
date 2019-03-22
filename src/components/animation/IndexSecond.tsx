import React from 'react';
import styled, { keyframes } from 'styled-components';
import color from './color';

export default ({ animEnd }: { animEnd: () => void }) => (
  <>
    <SecondAnim />
    <SecondAnim />
    <SecondAnim />
    <SecondAnim />
    <SecondAnim />
    <SecondAnim />
    <SecondAnim />
    <SecondAnim />
    <SecondAnim onAnimationEnd={animEnd} />
  </>
);
const anim = keyframes`
from {
  transform: scale(0);
}
to {
  transform: scale(1);
}
`;

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
    Object.keys(color.aqours).reduce(
      (a, c, i) => `
  ${a}&:nth-of-type(${i + 1}) {
    background-color: ${color.aqours[c]};
    animation-delay: .${i}s;
  }`,
      ''
    )}
`;
