const SearchCities = ({ searchValue, setSearchValue }) => {
  return (
    <>
      <input
        value={searchValue}
        onChange={setSearchValue}
        placeholder={"I want offices in..."}
      ></input>
    </>
  );
};

export default SearchCities;
