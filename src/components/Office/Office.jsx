const Office = ({
  id,
  nameEn,
  regionNameEn,
  expressCityDeliveries,
  postalCode,
}) => {
  return (
    // to be displayed as a grid, probably
    <li key={id} className="dropdown-li">
      <p>
        <strong>{nameEn} </strong>, in {regionNameEn}
      </p>
      <p>
        {" "}
        <strong> Has express delivery?</strong>{" "}
        {expressCityDeliveries ? "Yes!" : "No"}{" "}
      </p>
      <p>
        {" "}
        <strong> Postal code:</strong> {postalCode}
      </p>
    </li>
  );
};

export default Office;
