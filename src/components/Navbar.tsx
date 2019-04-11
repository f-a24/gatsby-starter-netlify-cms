import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

export default () => (
  <Nav>
    <input type="checkbox" id="burger-check" />
    <Burger htmlFor="burger-check">
      <span />
    </Burger>
    <Menu>
      <Item to="/">Home</Item>
      <Item to="/about">About</Item>
      <Item to="/blog">Blog</Item>
      <Item to="/products">Products</Item>
      <Item to="/contact">Contact</Item>
      <Item to="/contact/examples">Form Examples</Item>
    </Menu>
  </Nav>
);

const Burger = styled.label`
  width: 30px;
  height: 24px;
  display: inline-block;
  position: relative;
  cursor: pointer;
  z-index: 2;
  > span,
  > span::before,
  > span::after {
    width: 100%;
    height: 4px;
    background: linear-gradient(to right, rgb(242, 74, 164), rgb(0, 173, 254));
    position: absolute;
    transition-property: transform;
  }
  > span {
    display: block;
    top: 50%;
    transition-duration: 0.3s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    &::before,
    &::after {
      content: '';
      display: block;
    }
    &::before {
      top: -10px;
      transition: top 0.1s ease-in 0.34s, opacity 0.1s ease-in;
    }
    &::after {
      bottom: -10px;
      transition: bottom 0.1s ease-in 0.34s,
        transform 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
  }
`;

const Menu = styled.div`
  display: none;
`;

const Item = styled(Link)``;

const Nav = styled.nav`
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 2;
  > input {
    display: none;
  }
  > input[type='checkbox']:checked {
    ~ ${Burger} {
      > span,
      > span::before,
      > span::after {
        background: #fff;
      }
      > span {
        transform: rotate(225deg);
        transition-delay: 0.14s;
        transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        &::before {
          top: 0;
          opacity: 0;
          transition: top 0.1s ease-out, opacity 0.1s ease-out 0.14s;
        }
        &::after {
          bottom: 0;
          transform: rotate(-90deg);
          transition: bottom 0.1s ease-out,
            transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1) 0.14s;
        }
      }
    }
    ~ ${Menu} {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: fixed;
      width: 100vw;
      height: 100vh;
      background: linear-gradient(
        to right bottom,
        rgb(242, 74, 164),
        rgb(0, 173, 254)
      );
      top: 0;
      left: 0;
      z-index: 1;
      ${Item} {
        font-size: 2rem;
        color: #fff;
        text-decoration: none;
        position: relative;
        &::before {
          content: '';
          display: block;
          width: 0;
          position: absolute;
          bottom: 0;
          transition: width 0.1s ease-out;
        }
        &:hover {
          border-bottom: 2px solid #fff;
        }
      }
    }
  }
`;
