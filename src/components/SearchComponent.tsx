interface Props {
  updateName: (e: React.FormEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLInputElement>) => void;
}

/**
 *
 * Render a search bar and submit button to query pokemon api
 */
const SearchComponent: React.FunctionComponent<Props> = ({
  updateName,
  handleSubmit,
}) => {
  return (
    <>
      <input
        type="text"
        id="pokemonName"
        onChange={updateName}
        placeholder="Search for a pokemon"
        style={{ fontSize: "20px" }}
      />
      <input
        type="submit"
        value="search"
        className="btn-form"
        onClick={handleSubmit}
        style={{ fontSize: "20px" }}
      />
    </>
  );
};

export default SearchComponent;
