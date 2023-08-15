import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import Notiflix from 'notiflix';
import ApiServiceClass from '../service';
const ApiService = new ApiServiceClass();
export const Reviews = () => {
  const [ReviewsInfo, setReviewsInfo] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  useEffect(() => {
    setLoading(true);

    ApiService.Reviews(params.movieId)
      .then(json => {
        setReviewsInfo(json);
        if (json.length === 0) {
          setError('There is no Reviews');
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
      {ReviewsInfo.length !== 0 &&
        ReviewsInfo.map(({ author, content, id }) => {
          return (
            <li key={id}>
              <p>Author: {author}</p>
              <p>{content}</p>
            </li>
          );
        })}
    </>
  );
};
