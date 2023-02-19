import "../DropdownMenu/DropdownMenu.scss";

const DropdownItem = ({ id, city, onCity, office, onOffice }) => {
  return (
    <li key={id} className="dropdown-li">
      {city && onCity(city)}
      {office && onOffice(office)}
    </li>
  );
};

export default DropdownItem;
