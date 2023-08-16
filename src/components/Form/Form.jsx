const Form = ({ onSubmit, onChange, value }) => {
  return (
    <form action="" onSubmit={onSubmit}>
      <input
        type="text"
        name="Film"
        id="film"
        onChange={onChange}
        value={value}
      />
      <button type="submit">Search</button>
    </form>
  );
};
export default Form;
