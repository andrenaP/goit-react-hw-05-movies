// import DataForomFIle from '../json/All';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import ApiServiceClass from '../service';
// const ApiService = new ApiServiceClass();

const PosterFirstPart = 'https://image.tmdb.org/t/p/w220_and_h330_face/';

export function Home() {
  const [movies, setMovies] = useState([]);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);

  // console.log(DataForomFIle);
  // const books = DataForomFIle.results;

  useEffect(() => {
    // setLoading(true);

    const url = 'https://api.themoviedb.org/3/trending/all/day?language=en-US';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTA2OTg2YTMwZWVkNDNmMjRmZjJhZmE5ZGY0N2FiOCIsInN1YiI6IjY0ZDg4MzEzZDEwMGI2MDExYzgyM2U2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a8rp64-ZzW-scI2R6ybCgpdPObOATyZzVgg59Sy_an8',
      },
    };

    fetch(url, options)
      .then(res => res.json())
      .then(json => setMovies(json.results))
      .catch(err => console.error('error:' + err));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <h1>Home</h1>
      <ul>
        {movies &&
          movies.map(
            ({
              id,
              original_title = 'No name',
              original_name,
              poster_path,
            }) => {
              return (
                <li key={id}>
                  <img
                    src={PosterFirstPart + poster_path}
                    alt={original_name}
                  />
                  <Link to={'movies/' + id}>{original_title}</Link>
                </li>
              );
            }
          )}
      </ul>
    </main>
  );
}
