import { Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(NavLink)`
  display: flex;
  color: black;
  
  &.active {
    color: orange;
  }
`;
// const Container = styled('div')`
// `;
const Header = styled('div')`
`;
const SharedLayout = () => {
  return (
     <div>
      <Header style={{ margin: 20, fontSize: 30, color: '#010101'}}>
          <nav style={{display: 'flex'}}>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/movies">Movies</StyledLink>
          </nav>         
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
      </Header>
      </div>
)};

export default SharedLayout;