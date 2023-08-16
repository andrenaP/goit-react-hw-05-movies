import { Outlet } from 'react-router-dom';
import React, { Suspense } from 'react';
import css from '../css/Layout.module.css';
import NavLinkActive from 'components/NavLinkActive/NavLinkActive';
export const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <nav className={css.nav}>
          <NavLinkActive to="/">Home</NavLinkActive>
          <NavLinkActive to="/movies">movies</NavLinkActive>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <footer></footer>
    </>
  );
};
