const ReviewsList = ({ list }) => {
  return (
    <ul>
      {list.map(({ author, content, id }) => {
        return (
          <li key={id}>
            <p>Author: {author}</p>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default ReviewsList;
