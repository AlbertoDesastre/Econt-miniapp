const DropdownItem = ({
  id,
  postalCode,
  nameEn,
  regionNameEn,
  expressCityDeliveries,
}) => {
  /*  console.log("key", id); */
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
