import { useState, useEffect } from 'react';
import ApiServiceClass from '../service';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import Notiflix from 'notiflix';
const ApiService = new ApiServiceClass();
const PosterFirstPart = 'https://image.tmdb.org/t/p/w220_and_h330_face/';
export function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setquery] = useState(searchParams.get('query') ?? '');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const searchRequest = searchParams.get('query');
  const location = useLocation();
  useEffect(() => {
    if (!query) {
      return;
    }
    setLoading(true);

    ApiService.Movie(query)
      .then(json => {
        setMovies(json);
        if (json.length === 0) Notiflix.Notify.warning('There is no result');
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
        setquery('');
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchRequest]);

  const handleSubmit = event => {
    event.preventDefault();

    if (query.trim() === '') {
      Notiflix.Notify.warning('Enter the film title');
    }

    setMovies([]);
    console.log(query !== '');
    //setSearchParams({ query: query });

    setSearchParams(query !== '' ? { query: query } : {});
  };
  return (
    <>
      <h1>Movie Search</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="Film"
          id="film"
          onChange={event => setquery(event.target.value.toLowerCase())}
          value={query}
        />
        <button type="submit">Search</button>
      </form>
      {loading && 'Loading...'}
      {error && Notiflix.Notify.failure(`Error: ${error}`)}
      {movies.length !== 0 && (
        <ul>
          {movies.map(({ id, original_title, poster_path }) => {
            return (
              <li key={id} className="FilmItem">
                <Link
                  className="LinkToItem"
                  to={`${id}`}
                  state={{ form: location }}
                >
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
      )}
    </>
  );
}
