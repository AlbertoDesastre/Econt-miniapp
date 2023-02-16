import "../DropdownMenu/DropdownMenu.scss";

const DropdownItem = ({
  id,
  postalCode,
  nameEn,
  regionNameEn,
  expressCityDeliveries,
  cityId,
  displayOffices,
}) => {
  /*   if (nameEn === "Bansko") {
    console.log("City", nameEn, "Region", regionNameEn, "CITY-ID", cityId);
  } */
  if (!displayOffices) {
    return (
      // to be displayed as a grid, probably
      <li key={id} className="dropdown-li">
        <p>
          {nameEn}, in {regionNameEn}
        </p>
        <p>Has express delivery? {expressCityDeliveries ? "Yes!" : "No"} </p>
        <p>Postal code: {postalCode}</p>
      </li>
    );
  }
  return (
    // to be displayed as a grid, probably
    <li key={id} className="dropdown-li">
      <p>
        {nameEn}, in {regionNameEn}
      </p>
      <p>Has express delivery? {expressCityDeliveries ? "Yes!" : "No"} </p>
      <p>Postal code: {postalCode}</p>
    </li>
  );
};

export default DropdownItem;
