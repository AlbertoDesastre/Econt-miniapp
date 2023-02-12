import "./App.scss";
import DropdownMenu from "./components/DropdownMenu/DropdownMenu";
import LoadingMessage from "./components/LoadingMessage/LoadingMessage";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import DropdownItem from "./components/DropdownItem/DropdownItem";
import { useState } from "react";
import usePostApi from "./services/useFetchData";

function App() {
  const loading = true;
  const error = true;
  const exampleArray = [
    {
      id: 1,
      postalCode: 1,
      nameEn: "Office 1",
      regionNameEn: "RegionName1",
      expressCityDeliveries: true,
    },
    {
      id: 212,
      postalCode: 2,
      nameEn: "Office 2",
      regionNameEn: "RegionName2",
      expressCityDeliveries: true,
    },
    {
      id: 311,
      postalCode: 3,
      nameEn: "Office 3",
      regionNameEn: "RegionName3",
      expressCityDeliveries: false,
    },
  ];

  usePostApi(process.env.REACT_APP_API_URL_CITIES, { countryCode: "BGR" });

  const [displayDropdown, setDisplayDropdown] = useState(false);
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

        {displayDropdown &&
          exampleArray.map((element) => {
            return (
              <DropdownItem
                id={element.id}
                postalCode={element.postalCode}
                nameEn={element.nameEn}
                regionNameEn={element.regionNameEn}
                expressCityDeliveries={element.expressCityDeliveries}
              />
            );
          })}
      </DropdownMenu>
    </div>
  );
}

export default App;
