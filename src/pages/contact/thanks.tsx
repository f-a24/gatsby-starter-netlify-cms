import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../../components/Layout';

export default () => (
  <Layout>
    <Content>
      <Title>Thank you!</Title>
      <TopBtn to="/">TOP</TopBtn>
    </Content>
  </Layout>
);

const Content = styled.div`
  margin-top: calc(50vh - 100px);
  text-align: center;
`;

const Title = styled.h1`
  font-size: 5rem;
  font-weight: bold;
  text-align: center;
  color: rgb(242, 74, 164);
  background: linear-gradient(
    to right bottom,
    rgb(242, 74, 164),
    rgb(0, 173, 254)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 3rem;
`;

const TopBtn = styled(Link)`
  position: relative;
  text-decoration: none;
  font-size: 2rem;
  padding: 0 1rem;
  border-left: 1px solid rgb(242, 74, 164);
  border-right: 1px solid rgb(0, 173, 254);
  color: rgb(242, 74, 164);
  background: linear-gradient(
    to right bottom,
    rgb(242, 74, 164),
    rgb(0, 173, 254)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  &:before,
  &:after {
    position: absolute;
    content: '';
    display: block;
    height: 1px;
    width: 100%;
    background: linear-gradient(to right, rgb(242, 74, 164), rgb(0, 173, 254));
  }
  &::before {
    top: 0;
    left: 0;
  }
  &::after {
    bottom: 0;
    right: 0;
  }
  &:hover {
    -webkit-text-fill-color: #fff;
    border: none;
    color: #fff;
    background: linear-gradient(
      to right bottom,
      rgb(242, 74, 164),
      rgb(0, 173, 254)
    );
    cursor: pointer;
    &:before,
    &:after {
      display: none;
    }
  }
`;
