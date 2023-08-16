import { useState, useEffect } from 'react';
import ApiServiceClass from '../components/service';
import Notiflix from 'notiflix';
// import css from '../css/Home.module.css';
import MovieList from '../components/MovieList/MovieList';
const ApiService = new ApiServiceClass();

// const PosterFirstPart = 'https://image.tmdb.org/t/p/w220_and_h330_face/';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [getApiService, setApiService] = useState(false);

  useEffect(() => {
    setLoading(true);

    ApiService.All()
      .then(json => setMovies(json))
      .catch(err => setError(err))
      .finally(() => {
        setLoading(false);
        setApiService(true);
      });
  }, []);
  const isNotFound = getApiService && !movies.length;
  return (
    <>
      <h1>Home</h1>
      <ul>
        {loading && 'Loading ...'}
        {error && Notiflix.Notify.failure(`Error: ${error}`)}
        {isNotFound && 'No results found'}
        {movies.length > 0 && <MovieList MoviesList={movies} />}
      </ul>
    </>
  );
};

export default Home;
