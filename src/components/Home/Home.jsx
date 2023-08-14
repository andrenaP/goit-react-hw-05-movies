import DataForomFIle from '../json/All';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ApiServiceClass from '../service';
const ApiService = new ApiServiceClass();

const PosterFirstPart = 'https://image.tmdb.org/t/p/w220_and_h330_face/';

export function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // console.log(DataForomFIle);
  // const books = DataForomFIle.results;

  useEffect(() => {
    setLoading(true);
    try {
      ApiService.All()
        .then(Books => {
          setMovies(Books.results);
        })
        .finally(setLoading(false));
    } catch (e) {
      console.log(e);
    }
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
