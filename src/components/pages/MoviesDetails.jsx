import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Notiflix from 'notiflix';
import ApiServiceClass from '../service';
const ApiService = new ApiServiceClass();

export function MoviesDetails() {
  const [movieInfo, setMovieInfo] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const getYear = () => new Date(movieInfo.release_date).getFullYear();
  const params = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  console.log(location.state);
  console.log(location.state.from);
  useEffect(() => {
    setLoading(true);
    ApiService.Details(params.movieId)
      .then(json => setMovieInfo(json))
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <Link to={backLinkHref}>Back to products</Link>;
      <br />
      {error && Notiflix.Notify.failure(`Error: ${error}`)}
      {loading && 'Loading ...'}
      {movieInfo && (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w200/${movieInfo.poster_path}`}
            alt={movieInfo.title}
          />
          <h1>{movieInfo.title + ' ' + String(getYear())}</h1>
          <p>User Score: {movieInfo.popularity}%</p>
          <div className="movie_overview">
            <h2>Overview</h2>
            <p>{movieInfo.overview}</p>
          </div>
          <h3>Additional Information</h3>
          <Link className="LinkToItem" to={'cast'}>
            cast
          </Link>
          <Link className="LinkToItem" to={'reviews'}>
            reviews
          </Link>
          <Outlet></Outlet>
        </>
      )}
    </main>
  );
}
