import { useState } from "react";
import usePostApi from "./usePostApi";

const useCities = (props) => {
  const [displayDropdown, setDisplayDropdown] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const { data, loading, error } = usePostApi(
    process.env.REACT_APP_API_URL_CITIES,
    { countryCode: "BGR" }
  );
  /* The cities are inside of an object, therefore I have to first get all the arrays and then do the map */
  const cities = data.cities;
  let searchedCities = [];
  /*   console.log(cities); */

  if (searchValue.length >= 1) {
    searchedCities = cities.filter((city) => {
      searchValue.toLocaleLowerCase();
      city.regionNameEn.toLocaleLowerCase();

      return city.regionNameEn.includes(searchValue);
    });
  } else {
    searchedCities = cities;
  }
  /*   console.log(searchedCities); */

  return {
    searchedCities,
    loading,
    error,
    displayDropdown,
    searchValue,
    setDisplayDropdown,
    setSearchValue,
  };
};

export default useCities;