import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ApiServiceClass from '../service';
import './Home';
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
  const isNotFound = !setApiService && !movies.length;
  return (
    <main>
      <h1>Home</h1>
      <ul>
        {loading && 'Loading ...'}
        {error && <div>{error}</div>}
        {isNotFound && 'No results found'}
        {movies &&
          movies
            .filter(movie => movie.original_title)
            .map(({ id, original_title, poster_path }) => {
              return (
                <li key={id} className="FilmItem">
                  <img
                    src={PosterFirstPart + poster_path}
                    alt={original_title}
                  />
                  <Link className="LinkToItem" to={'movies/' + id}>
                    {original_title}
                  </Link>
                </li>
              );
            })}
      </ul>
    </main>
  );
}
