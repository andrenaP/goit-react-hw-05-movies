import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Notiflix from 'notiflix';
import ApiServiceClass from '../components/service';
import css from '../css/MoviesDetails.module.css';
import defaultIMG from 'picture/NoImage.jpg';

const ApiService = new ApiServiceClass();

const MoviesDetails = () => {
  const [movieInfo, setMovieInfo] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const getYear = () => new Date(movieInfo.release_date).getFullYear();
  const params = useParams();
  const IMGforMovies = movieInfo.poster_path
    ? `https://image.tmdb.org/t/p/w200/${movieInfo.poster_path}`
    : defaultIMG;
  const location = useLocation();
  const backLinkHref = useRef(location.state?.form ?? '/movies');
  const { movieId } = params;
  useEffect(() => {
    setLoading(true);
    ApiService.Details(movieId)
      .then(data => setMovieInfo(data))
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [movieId]);

  return (
    <main>
      <Link to={backLinkHref.current}>Back to products</Link>
      <br />
      {error && Notiflix.Notify.failure(`Error: ${error}`)}
      {loading && 'Loading ...'}
      {movieInfo && (
        <>
          <img src={IMGforMovies} alt={movieInfo.title} />
          <h1>{movieInfo.title + ' ' + String(getYear())}</h1>
          <p>User Score: {movieInfo.popularity}%</p>
          <div className="movie_overview">
            <h2>Overview</h2>
            <p>{movieInfo.overview}</p>
          </div>
          <h3>Additional Information</h3>
          <ul className={css.GroupOfLinks}>
            <li>
              {' '}
              <Link className={css.LinkToItem} to={'cast'}>
                cast
              </Link>
            </li>
            <li>
              {' '}
              <Link className={css.LinkToItem} to={'reviews'}>
                reviews
              </Link>
            </li>
          </ul>

          <Outlet></Outlet>
        </>
      )}
    </main>
  );
};

export default MoviesDetails;
