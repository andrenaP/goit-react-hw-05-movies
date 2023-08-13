import ApiServiceClass from './service';
import DataForomFIle from '../json/All.json';
import { Routes, Route, NavLink } from 'react-router-dom';
import React from 'react';

import { Home } from './Home/Home';
import { Movies } from './Movies/Movies';
import { MoviesDetails } from './MoviesDetails/MoviesDetails';
// import Products from "path/to/pages/Products";

const ApiService = new ApiServiceClass();

export const App = () => {
  return (
    <div>
      <header
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <nav style={{ display: 'flex', gap: '100px', padding: '20px' }}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">movies</NavLink>
        </nav>
      </header>{' '}
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/movies" element={<Movies></Movies>} />
        <Route
          path="/movies/:movieId"
          element={<MoviesDetails></MoviesDetails>}
        />
        <Route path="*" element={<div>NotFound</div>} />
      </Routes>
      <footer></footer>
    </div>
  );
};
