import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledLink, Header, Nav } from './sharedLayout.styled';

const SharedLayout = () => {
  return (
    <section>
      <Header>
        <Nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </Nav>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Header>
    </section>
  );
};

export default SharedLayout;
