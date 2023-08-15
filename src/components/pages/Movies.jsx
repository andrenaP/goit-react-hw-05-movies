import { useState } from 'react';
import ApiServiceClass from '../service';
import { Link } from 'react-router-dom';
import Notiflix from 'notiflix';
const ApiService = new ApiServiceClass();
const PosterFirstPart = 'https://image.tmdb.org/t/p/w220_and_h330_face/';
export function Movies() {
  const [query, setquery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setMovies([]);
    // console.log(query);
    // if (error) setError(null);
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

        console.log(movies);
      });
  };
  return (
    <>
      <h1>Movie Search</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="Film"
          id="film"
          onChange={event => setquery(event.target.value)}
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
                <Link className="LinkToItem" to={`${id}`}>
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
