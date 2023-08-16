import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import Notiflix from 'notiflix';
import ApiServiceClass from '../components/service';
import ReviewsList from 'components/ReviewsList/ReviewsList';
import SubPageHeading from '../components/SubPageHeading/SubPageHeading';
const ApiService = new ApiServiceClass();
const Reviews = () => {
  const [ReviewsInfo, setReviewsInfo] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const { movieId } = params;
  useEffect(() => {
    setLoading(true);

    ApiService.Reviews(movieId)
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
  }, [movieId]);

  return (
    <>
      {/* {error && Notiflix.Notify.failure(`Error: ${error}`)} */}
      {loading && 'Loading ...'}
      {error && `${error}`}
      {ReviewsInfo.length !== 0 && (
        <>
          <SubPageHeading>Cast</SubPageHeading>

          <ReviewsList list={ReviewsInfo} />
        </>
      )}
    </>
  );
};

export default Reviews;
