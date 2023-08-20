import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
  display: flex;
  color: black;
  margin: 10px;
  padding; 10px;
  
  &.active {
    color: red;
  }
`;

export const Header = styled('header')`
`;

export const Nav = styled('nav')`
   display: flex;
   height: 40px;
   box-shadow: 0px 2px 2px 1px rgba(0, 0, 255, .2);
`;