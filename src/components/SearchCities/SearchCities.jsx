import "./SearchCities.scss";

const SearchCities = ({ searchValue, setSearchValue }) => {
  return (
    <>
      <input
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        className="input input-searchCities"
        placeholder={"I want offices in..."}
      ></input>
    </>
  );
};

export default SearchCities;
