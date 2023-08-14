import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ApiServiceClass from '../service';
const ApiService = new ApiServiceClass();

export function MoviesDetails() {
  const [movieInfo, setMovieInfo] = useState([]);
  const getYear = () => new Date(movieInfo.release_date).getFullYear();
  const params = useParams();
  useEffect(() => {
    ApiService.Details(params.movieId).then(json => setMovieInfo(json));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
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
    </main>
  );
}
