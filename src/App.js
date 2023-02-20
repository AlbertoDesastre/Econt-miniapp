import "./App.scss";
import DropdownMenu from "./components/DropdownMenu/DropdownMenu";
import LoadingMessage from "./components/LoadingMessage/LoadingMessage";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import DropdownItem from "./components/DropdownItem/DropdownItem";
import { useState } from "react";
import useEcont from "./hooks/useEcont";
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
import Office from "./components/Office/Office";
import City from "./components/City/City";

function App() {
  const [displayOffices, setDisplayOffices] = useState(false);
  const changeDropdown = () => {
    setDisplayOffices(!displayOffices);
  };
  const {
    offices,
    searchedCities,
    loading,
    error,
    displayDropdown,
    searchValue,
    setDisplayDropdown,
    setSearchValue,
  } = useEcont();

  const { users, userSelected, setUserSelected } = useUsers();
  /*  console.log(offices); */
  console.log(userSelected);

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
              user={user}
              userSelection={[userSelected, setUserSelected]}
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
          <DropdownMenu
            title={displayOffices ? "Offices" : "Cities"}
            changeDropdown={changeDropdown}
          />
          <SearchCities
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <button className="button show-dropdown " onClick={onClick}>
            Search
          </button>
        </UserInputs>
        {!displayDropdown && <DropdownSkeleton title={"Available cities"} />}
        {/* If an user wants to see the cities where Econt is available (!displayOffices)
              a Dropdown with available cities will be displayed */}
        {displayDropdown && (
          <DropdownMenu
            title={displayOffices ? "Available offices" : "Available cities"}
          >
            {!loading &&
              !displayOffices &&
              searchedCities.map((city) => {
                return (
                  <DropdownItem
                    id={city.id}
                    city={city}
                    onCity={(city) => <City city={city} />}
                  />
                );
              })}

            {!loading &&
              displayOffices &&
              offices.map((office) => {
                return (
                  <DropdownItem
                    id={office.id}
                    office={office}
                    onOffice={(office) => <Office office={office} />}
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
