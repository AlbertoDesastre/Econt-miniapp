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
import UserSelection from "./components/UserSelection/UserSelection";
import UserProfile from "./components/UserProfile/UserProfile";
import useUsers from "./hooks/useUsers";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  console.log("hello");
  const {
    cities,
    searchedCities,
    loading,
    error,
    displayDropdown,
    searchValue,
    setDisplayDropdown,
    setSearchValue,
  } = useCities();

  const { users } = useUsers();
  console.log(users);

  const onClick = () => {
    setDisplayDropdown(!displayDropdown);
  };

  return (
    <div className="App">
      <Header imgSrc={econt} />

      <UserSelection>
        {users.map((user) => {
          return (
            <UserProfile
              id={user.id}
              name={user.name}
              region={user.region}
              city={user.city}
            />
          );
        })}
      </UserSelection>
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
