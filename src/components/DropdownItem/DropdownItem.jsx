import "../DropdownMenu/DropdownMenu.scss";

const DropdownItem = ({
  id,
  postalCode,
  nameEn,
  regionNameEn,
  expressCityDeliveries,
  displayOffices,
  address,
  normalBusinessHoursFrom,
  normalBusinessHoursTo,
}) => {
  const openFromDate = new Date(normalBusinessHoursFrom);
  const openToDate = new Date(normalBusinessHoursTo);
  const openFrom = openFromDate.toLocaleTimeString();
  const openTo = openToDate.toLocaleTimeString();

  console.log(openTo);

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
        <strong>{nameEn}</strong>
      </p>
      <p>
        <strong>Address: </strong> {address}
      </p>
      <p>
        <strong>Postal code:</strong> {postalCode}
      </p>
      <p>
        <strong>Open from: </strong> {openFrom} <strong> to: </strong> {openTo}
      </p>
    </li>
  );
};

export default DropdownItem;
