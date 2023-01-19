import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding: 0px 20px;
  margin-left: 0;
  margin-right: 0;
`;

export const Header = styled.header`
  padding: 15px 0px;
  background-color: aliceblue;
  flex-shrink: 0;
`;

export const Link = styled(NavLink)`
  color: black;
  margin-right: 20px;
  text-decoration: none;
  padding: 10px;

  &.active {
    color: orange;
  }

  &:hover {
    /* cursor: pointer; */
    color: orange;
  }
`;

export const HeaderTitle = styled.h1`
  color: orange;
`;

export const Footer = styled.footer`
  padding: 10px;
  background-color: aliceblue;
  color: orange;
  text-align: center;
  flex-shrink: 0;
`;
