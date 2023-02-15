import "./App.scss";
import DropdownMenu from "./components/DropdownMenu/DropdownMenu";
import LoadingMessage from "./components/LoadingMessage/LoadingMessage";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import DropdownItem from "./components/DropdownItem/DropdownItem";
import { useState } from "react";
import usePostApi from "./services/usePostApi";
import Header from "./components/Header/Header";
import econt from "./assets/econt.jpg";
import DropdownSkeleton from "./components/DropdownSkeleton/DropdownSekeleton";
import SearchCities from "./components/SearchCities/SearchCities";
import MainContent from "./components/MainContent/MainContent";
import UserInputs from "./components/UserInputs/UserInputs";

function App() {
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
  console.log(searchedCities);

  const onClick = () => {
    setDisplayDropdown(!displayDropdown);
  };

  return (
    <div className="App">
      <Header imgSrc={econt} />
      <MainContent
        error={error}
        loading={loading}
        onError={() => <ErrorMessage />}
        onLoading={() => <LoadingMessage />}
      >
        <UserInputs>
          <DropdownMenu title={"Cities"} />
          <SearchCities
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <button className="button show-dropdown " onClick={onClick}>
            Search
          </button>
        </UserInputs>
        {/*--- MAIN SECTION --- */}
        {!displayDropdown && <DropdownSkeleton />}
        {displayDropdown && !loading && (
          <DropdownMenu title={"Econt offices"}>
            {displayDropdown &&
              !loading &&
              searchedCities.map((city) => {
                return (
                  <DropdownItem
                    id={city.id}
                    postalCode={city.postCode}
                    nameEn={city.nameEn}
                    regionNameEn={city.regionNameEn}
                    expressCityDeliveries={city.expressCityDeliveries}
                  />
                );
              })}
          </DropdownMenu>
        )}
        {/*--- MAIN SECTION --- */}
      </MainContent>
    </div>
  );
}

export default App;
