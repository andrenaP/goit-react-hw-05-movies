import { NavLink, Outlet } from 'react-router-dom';
import React, { Suspense } from 'react';
import css from './css/Layout.module.css';
const activeClassName = {
  color: '#2196f3',
};
export const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <nav className={css.nav}>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeClassName : undefined)}
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            style={({ isActive }) => (isActive ? activeClassName : undefined)}
          >
            movies
          </NavLink>
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
