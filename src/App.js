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

function App() {
  const [displayDropdown, setDisplayDropdown] = useState(false);
  const { data, loading, error } = usePostApi(
    process.env.REACT_APP_API_URL_CITIES,
    { countryCode: "BGR" }
  );
  /* The cities are inside of an object, therefore I have to first get all the arrays and then do the map */
  const cities = data.cities;
  /*   console.log(cities); */

  const onClick = () => {
    setDisplayDropdown(!displayDropdown);
  };

  return (
    <div className="App">
      <Header>
        <img src={econt} alt="econt bussiness "></img>
        <h2>ECONT IMPLEMENTATION</h2>
      </Header>
      <section>
        {loading && (
          <LoadingMessage message="Loading your cities, please stand by..." />
        )}
        {error && <ErrorMessage message={"An error ocurred, call support."} />}
        <button className="button show-dropdown " onClick={onClick}>
          Show available cities
        </button>

        {!displayDropdown && <DropdownSkeleton />}

        {displayDropdown && !loading && (
          <DropdownMenu>
            {/* An error telling that each child in a list should have an unique id is constantly appearing,
       even though I'm giving every <li> an id. Is this a react bug? */}

            {/* Para mañana hacer un DropdowItem skeleton, que se pondrá al lado del botoncito de "enseñar ciudades disponibles"
      , y es como dandole una pista al usuario de qué se pude esperar al pulsar el botón. Luego, cuando el usuario de al botón,
      se le añadirá una clase nueva al DropdownItem skeleton, para que haga una animación chiquitita, y luego se muestra el dropdown,
      con un tope de ciudades que se muestran a la vez...
      */}
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
      </section>
    </div>
  );
}

export default App;
