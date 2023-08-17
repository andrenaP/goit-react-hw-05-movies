import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './MovieList.module.css';
import defaultIMG from 'picture/NoImage.jpg';
import { Link } from 'react-router-dom';
const PosterFirstPart = 'https://image.tmdb.org/t/p/w220_and_h330_face/';

const MovieList = ({ moviesList }) => {
  const location = useLocation();
  return (
    <ul className={css.MoviesList}>
      {moviesList.map(({ id, original_title, poster_path }) => (
        <li key={id} className={css.FilmItem}>
          <Link
            className={css.LinkToItem}
            to={`/movies/${id}`}
            state={{ form: location }}
          >
            <img
              src={poster_path ? PosterFirstPart + poster_path : defaultIMG}
              alt={original_title}
              className={css.img}
            />
            {original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;

MovieList.propTypes = {
  MoviesList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string,
    })
  ),
};
