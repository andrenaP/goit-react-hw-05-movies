import { Routes, Route } from 'react-router-dom';
import React, { lazy } from 'react';

// import { Home } from './pages/Home';
import { Layout } from './Layout';
// import { Movies } from './pages/Movies';
// import { MoviesDetails } from './pages/MoviesDetails';
// import { Cast } from './pages/Cast';
// import { Reviews } from './pages/Reviews';

const Home = lazy(() => import('./pages/Home'));
const Movies = lazy(() => import('./pages/Movies'));
const MoviesDetails = lazy(() => import('./pages/MoviesDetails'));
const Cast = lazy(() => import('./pages/Cast'));
const Reviews = lazy(() => import('./pages/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<Home></Home>} />
          <Route path="movies" element={<Movies></Movies>} />
          <Route
            path="movies/:movieId"
            element={<MoviesDetails></MoviesDetails>}
          >
            <Route path="cast" element={<Cast></Cast>} />
            <Route path="reviews" element={<Reviews></Reviews>} />
          </Route>
          <Route path="*" element={<div>NotFound</div>} />
        </Route>
      </Routes>
    </>
  );
};
