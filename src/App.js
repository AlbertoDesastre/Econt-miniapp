import "./App.scss";
import DropdownMenu from "./components/DropdownMenu/DropdownMenu";
import LoadingMessage from "./components/LoadingMessage/LoadingMessage";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import DropdownItem from "./components/DropdownItem/DropdownItem";
import { useState } from "react";
import usePostApi from "./services/usePostApi";

function App() {
  const [displayDropdown, setDisplayDropdown] = useState(false);
  const { data, loading, error } = usePostApi(
    process.env.REACT_APP_API_URL_CITIES,
    { countryCode: "BGR" }
  );
  /* The cities are inside of an object, therefore I have to first get all the arrays and then do the map */
  const cities = data.cities;
  console.log(cities);
  console.log(loading);

  const onClick = () => {
    setDisplayDropdown(!displayDropdown);
  };

  return (
    <div className="App">
      <h1>I'm working</h1>
      <DropdownMenu>
        {loading && (
          <LoadingMessage message={"Loading your cities, please stand by..."} />
        )}
        {error && <ErrorMessage message={"An error ocurred, call support."} />}

        {/* This button is rendered inside the <ul> tag in the <DropdownMenu>, is this correct, is it a bad practice? */}
        <button onClick={onClick}>Show available cities</button>

        {/* An error telling that each child in a list should have an unique id is constantly appearing,
         even though I'm giving every <li> an id. Is this a react bug? */}
        {displayDropdown &&
          !!cities &&
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
    </div>
  );
}

export default App;
