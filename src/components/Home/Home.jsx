import DataForomFIle from '../json/All';
import { Link } from 'react-router-dom';
export function Home() {
  console.log(DataForomFIle);
  const books = DataForomFIle.results;
  const PosterFirstPart = 'https://image.tmdb.org/t/p/w220_and_h330_face/';
  return (
    <main>
      <h1>Home</h1>
      <ul>
        {books.map(
          ({ id, original_title = 'No name', original_name, poster_path }) => {
            return (
              <li key={id}>
                <img src={PosterFirstPart + poster_path} alt={original_name} />
                <Link to={'movies/' + id}>{original_title}</Link>
              </li>
            );
          }
        )}
      </ul>
    </main>
  );
}
