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
  /*   const { data, loading, error } = usePostApi(
    process.env.REACT_APP_API_URL_CITIES,
    { countryCode: "BGR" }
  ); */
  const { data } = usePostApi(process.env.REACT_APP_API_URL_CITIES, {
    countryCode: "BGR",
  });

  const loading = true;
  const error = true;

  /* The cities are inside of an object, therefore I have to first get all the arrays and then do the map */
  const cities = data.cities;
  /*   console.log(cities); */

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
          <SearchCities />
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
              cities.map((city) => {
                return (
                  <DropdownItem
                    id={city.id}
                    postalCode={city.postalCode}
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
