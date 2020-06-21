import * as React from 'react';
import styled from 'styled-components';

const Footer: React.FC = () => (
  <StyledSection>
    <p>Copyright © 2019 @f-a24 All Rights Reserved.</p>
  </StyledSection>
);

export default Footer;

const StyledSection = styled.section`
  padding: 2rem 0 1rem;
  margin-top: auto;
  text-align: right;
  color: #fff;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0) 50%,
    rgb(242, 74, 164) 51%,
    rgb(0, 173, 254)
  );
`;
