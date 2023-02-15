import "./App.scss";
import DropdownMenu from "./components/DropdownMenu/DropdownMenu";
import LoadingMessage from "./components/LoadingMessage/LoadingMessage";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import DropdownItem from "./components/DropdownItem/DropdownItem";
import { useState } from "react";
import useCities from "./hooks/useCities";
import Header from "./components/Header/Header";
import econt from "./assets/econt.jpg";
import DropdownSkeleton from "./components/DropdownSkeleton/DropdownSekeleton";
import SearchCities from "./components/SearchCities/SearchCities";
import MainContent from "./components/MainContent/MainContent";
import UserInputs from "./components/UserInputs/UserInputs";

function App() {
  const {
    searchedCities,
    loading,
    error,
    displayDropdown,
    searchValue,
    setDisplayDropdown,
    setSearchValue,
  } = useCities();

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
      </MainContent>
    </div>
  );
}

export default App;
