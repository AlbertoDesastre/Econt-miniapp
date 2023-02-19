import "../DropdownMenu/DropdownMenu.scss";

const DropdownItem = ({ id, city, onCity, office, onOffice }) => {
  /*  console.log(city); */
  /*   if (city) {
    console.log("Ciudad -->", city);
  }
  if (office) {
    console.log("Oficina -->", office);
  } */
  return (
    <li key={id} className="dropdown-li">
      {city && onCity(city)}
      {office && onOffice(office)}
    </li>
  );
};

export default DropdownItem;
