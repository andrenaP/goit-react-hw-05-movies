import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ApiServiceClass from '../service';
import Notiflix from 'notiflix';
import '../css/Home.css';
const ApiService = new ApiServiceClass();

const PosterFirstPart = 'https://image.tmdb.org/t/p/w220_and_h330_face/';

export function Home() {
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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const isNotFound = getApiService && !movies.length;
  return (
    <>
      <h1>Home</h1>
      <ul className="ListOfBooks">
        {loading && 'Loading ...'}
        {error && Notiflix.Notify.failure(`Error: ${error}`)}
        {isNotFound && 'No results found'}
        {movies &&
          movies
            .filter(movie => movie.original_title)
            .map(({ id, original_title, poster_path }) => {
              return (
                <li key={id} className="FilmItem">
                  <Link className="LinkToItem" to={'movies/' + id}>
                    <img
                      src={PosterFirstPart + poster_path}
                      alt={original_title}
                    />
                    {original_title}
                  </Link>
                </li>
              );
            })}
      </ul>
    </>
  );
}
