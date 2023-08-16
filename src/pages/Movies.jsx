import { useState, useEffect } from 'react';
import ApiServiceClass from '../components/service';
import Form from 'components/Form/Form';
import { useLocation, useSearchParams } from 'react-router-dom';
import Notiflix from 'notiflix';
import MovieList from '../components/MovieList/MovieList';
import PageHeading from '../components/PageHeading/PageHeading';
const ApiService = new ApiServiceClass();

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setquery] = useState(searchParams.get('query') ?? '');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const searchRequest = searchParams.get('query');
  const location = useLocation();
  useEffect(() => {
    if (!searchRequest) {
      return;
    }
    setLoading(true);

    ApiService.Movie(searchRequest)
      .then(json => {
        setMovies(json);
        if (json.length === 0) Notiflix.Notify.warning('There is no result');
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchRequest]);

  const handleSubmit = event => {
    event.preventDefault();

    if (query.trim() === '') {
      Notiflix.Notify.warning('Enter the film title');
    }

    // setMovies([]);
    // console.log(query !== '');
    //setSearchParams({ query: query });

    if (query !== searchRequest) {
      setMovies([]);
      setSearchParams(query !== '' ? { query: query } : {});
      setquery('');
    } else Notiflix.Notify.warning(`${query} was already found`);
  };
  return (
    <>
      <PageHeading>Movie Search</PageHeading>
      <Form
        onSubmit={handleSubmit}
        onChange={event => setquery(event.target.value.toLowerCase())}
        value={query}
      />
      {loading && 'Loading...'}
      {error && Notiflix.Notify.failure(`Error: ${error}`)}
      {movies.length !== 0 && (
        <MovieList MoviesList={movies} state={{ form: location }} />
      )}
    </>
  );
};

export default Movies;
