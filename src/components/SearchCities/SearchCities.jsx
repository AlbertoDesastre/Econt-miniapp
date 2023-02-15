import "./SearchCities.scss";

const SearchCities = ({ searchValue, setSearchValue }) => {
  return (
    <>
      <input
        value={searchValue}
        onChange={setSearchValue}
        className="input input-searchCities"
        placeholder={"I want offices in..."}
      ></input>
    </>
  );
};

export default SearchCities;
