import { NavLink, Outlet } from 'react-router-dom';
export const Layout = () => {
  return (
    <>
      <header>
        <nav style={{ display: 'flex', gap: '100px', padding: '20px' }}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">movies</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};
