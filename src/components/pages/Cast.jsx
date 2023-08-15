import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import Notiflix from 'notiflix';
import ApiServiceClass from '../service';
const ApiService = new ApiServiceClass();
export const Cast = () => {
  const [CastInfo, setCastInfo] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  useEffect(() => {
    setLoading(true);

    ApiService.Credits(params.movieId)
      .then(json => {
        setCastInfo(json);
        if (json.length === 0) {
          setError('There is no Casts');
        }
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* {error && Notiflix.Notify.failure(`Error: ${error}`)} */}
      {loading && 'Loading ...'}
      {error && `${error}`}
      {CastInfo.length !== 0 &&
        CastInfo.map(({ profile_path, name, id, character }) => {
          return (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w300/${profile_path}`}
                alt={`${name} portrait`}
              />
              <div>
                <p>Name: {name}</p>
                <p>Character: {character}</p>
              </div>
            </li>
          );
        })}
    </>
  );
};
