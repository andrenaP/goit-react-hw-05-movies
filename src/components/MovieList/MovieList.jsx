import css from './MovieList.module.css';
import IfnoIMG from 'picture/l60Hf.png';
import { Link } from 'react-router-dom';
const PosterFirstPart = 'https://image.tmdb.org/t/p/w220_and_h330_face/';
const MovieList = ({ MoviesList, state }) => {
  console.log(state);
  return MoviesList.map(({ id, original_title, poster_path }) => {
    const Parsed_poster_path = poster_path
      ? PosterFirstPart + poster_path
      : IfnoIMG;
    const ToInLink = `/movies/${id}`;
    if (!original_title) return <></>;
    return (
      <li key={id} className={css.FilmItem}>
        <Link className={css.LinkToItem} to={ToInLink} state={state}>
          {' '}
          <img src={Parsed_poster_path} alt={original_title} />
          {original_title}
        </Link>
      </li>
    );
  });
};
export default MovieList;
