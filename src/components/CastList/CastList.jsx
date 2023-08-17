import defaultIMG from 'picture/l60Hf.png';
const CastList = ({ list }) => {
  return (
    <ul>
      {list.map(({ profile_path, name, id, character }) => {
        const path_parsed = profile_path
          ? `https://image.tmdb.org/t/p/w300/${profile_path}`
          : defaultIMG;
        return (
          <li key={id}>
            <img
              src={path_parsed}
              alt={`${name} portrait`}
              style={{ innerHeight: '450', innerWidth: '300' }}
            />
            <div>
              <p>Name: {name}</p>
              <p>Character: {character}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default CastList;
