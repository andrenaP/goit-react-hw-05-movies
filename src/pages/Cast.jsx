import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import Notiflix from 'notiflix';
import ApiServiceClass from '../components/service';
import CastList from '../components/CastList/CastList';
const ApiService = new ApiServiceClass();
const Cast = () => {
  const [CastInfo, setCastInfo] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const params = useParams();

  const { movieId } = params;

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
  }, [movieId]);

  return (
    <>
      {/* {error && Notiflix.Notify.failure(`Error: ${error}`)} */}
      {loading && 'Loading ...'}
      {error && `${error}`}
      {CastInfo.length !== 0 && <CastList list={CastInfo} />}
    </>
  );
};
export default Cast;
