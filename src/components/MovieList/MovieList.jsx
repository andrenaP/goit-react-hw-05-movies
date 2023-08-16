import css from './MovieList.module.css';
import defaultIMG from 'picture/NoImage.jpg';
import { Link } from 'react-router-dom';
const PosterFirstPart = 'https://image.tmdb.org/t/p/w220_and_h330_face/';
const MovieList = ({ MoviesList, state }) => {
  // console.log(state);
  const ListOfMoviesMaped = MoviesList.map(
    ({ id, original_title, poster_path }) => {
      const Parsed_poster_path = poster_path
        ? PosterFirstPart + poster_path
        : defaultIMG;
      const ToInLink = `/movies/${id}`;
      if (!original_title) return <div key={id}></div>;
      return (
        <li key={id} className={css.FilmItem}>
          <Link className={css.LinkToItem} to={ToInLink} state={state}>
            {' '}
            <img
              src={Parsed_poster_path}
              alt={original_title}
              className={css.img}
            />
            {original_title}
          </Link>
        </li>
      );
    }
  );

  return <ul className={css.MoviesList}>{ListOfMoviesMaped}</ul>;
};
export default MovieList;
