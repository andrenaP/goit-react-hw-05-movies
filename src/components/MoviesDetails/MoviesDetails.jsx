import { useParams } from 'react-router-dom';

export function MoviesDetails() {
  const params = useParams();
  return (
    <main>
      <h1>MoviesDetails</h1>
      <p>MoviesDetails {params.movieId}</p>
    </main>
  );
}
