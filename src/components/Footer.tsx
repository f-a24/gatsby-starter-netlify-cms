import React from 'react';
import styled from 'styled-components';

export default () => (
  <Footer className="footer">
    <p>{window.location.href}</p>
    <p>Copyright © 2019 @f-a24 All Rights Reserved.</p>
  </Footer>
);

const Footer = styled.section`
  padding: 2rem 0 1rem;
  text-align: right;
  color: #fff;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0) 50%,
    rgb(242, 74, 164) 51%,
    rgb(0, 173, 254)
  );
`;
