import { useState } from 'react';
import Notiflix from 'notiflix';
import PropTypes from 'prop-types';
const SearchBar = ({ onSubmit }) => {
  const [query, setquery] = useState(''); //useState(searchParams.get('query') ?? '');
  const onFormSubmit = event => {
    event.preventDefault();
    if (query.trim() === '') {
      Notiflix.Notify.warning('Enter the film title');
      return;
    }

    onSubmit(query.trim());
    setquery('');
  };
  return (
    <form action="" onSubmit={onFormSubmit}>
      <input
        type="text"
        name="Film"
        id="film"
        onChange={event => setquery(event.target.value.toLowerCase())}
        value={query}
      />
      <button type="submit">Search</button>
    </form>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
export default SearchBar;
