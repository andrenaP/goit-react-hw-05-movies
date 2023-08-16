const ReviewsList = ({ list }) => {
  return list.map(({ author, content, id }) => {
    return (
      <li key={id}>
        <p>Author: {author}</p>
        <p>{content}</p>
      </li>
    );
  });
};

export default ReviewsList;
