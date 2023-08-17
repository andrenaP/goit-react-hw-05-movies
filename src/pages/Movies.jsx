import { useState, useEffect } from 'react';
import ApiServiceClass from '../components/service';
import SearchBar from 'components/SearchBar/SearchBar';
import { useSearchParams } from 'react-router-dom';
import Notiflix from 'notiflix';
import MovieList from '../components/MovieList/MovieList';
import PageHeading from '../components/PageHeading/PageHeading';
const ApiService = new ApiServiceClass();

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const searchRequest = searchParams.get('query');
  useEffect(() => {
    if (!searchRequest) {
      return;
    }
    setLoading(true);

    ApiService.Movie(searchRequest)
      .then(data => {
        if (data.length === 0) {
          Notiflix.Notify.warning('There is no result');
          return;
        }
        setMovies(data);
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchRequest]);

  const handleSubmit = query => {
    if (query !== searchRequest) {
      setMovies([]);
      setSearchParams(query !== '' ? { query: query } : {});
      // setquery('');
    } else Notiflix.Notify.warning(`${query} was already found`);
  };
  return (
    <>
      <PageHeading>Movie Search</PageHeading>
      <SearchBar onSubmit={handleSubmit} />
      {loading && 'Loading...'}
      {error && Notiflix.Notify.failure(`Error: ${error}`)}
      {movies.length !== 0 && <MovieList moviesList={movies} />}
    </>
  );
};

export default Movies;
