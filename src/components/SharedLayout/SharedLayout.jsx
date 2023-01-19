import React from 'react';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import {
  Header,
  Link,
  HeaderTitle,
  Footer,
  Container,
} from './SharedLayout.styled';
import { GlobalStyle } from 'components/GlobalStyles';

function SharedLayout() {
  return (
    <div className="mainContainer">
      <Header>
        <Container>
          <HeaderTitle>
            <span role="img" aria-label="movie icon">
              🎬
            </span>{' '}
            FavFilm
          </HeaderTitle>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
          </nav>
        </Container>
      </Header>
      <main>
        <Container>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
      <Footer>(c) Peckeby</Footer>
      <GlobalStyle />
    </div>
  );
}

export default SharedLayout;
