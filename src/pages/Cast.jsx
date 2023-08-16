import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import Notiflix from 'notiflix';
import ApiServiceClass from '../components/service';
import CastList from '../components/CastList/CastList';
import SubPageHeading from '../components/SubPageHeading/SubPageHeading';
const ApiService = new ApiServiceClass();
const Cast = () => {
  const [CastInfo, setCastInfo] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const params = useParams();

  const { movieId } = params;

  useEffect(() => {
    setLoading(true);

    ApiService.Credits(movieId)
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
  }, [movieId]);

  return (
    <>
      {/* {error && Notiflix.Notify.failure(`Error: ${error}`)} */}
      {loading && 'Loading ...'}
      {error && `${error}`}
      {CastInfo.length !== 0 && (
        <>
          <SubPageHeading>Cast</SubPageHeading>
          <CastList list={CastInfo} />
        </>
      )}
    </>
  );
};
export default Cast;
