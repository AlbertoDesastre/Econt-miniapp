const City = (props) => {
  const { nameEn, regionNameEn, expressCityDeliveries, postCode } = props.city;
  return (
    // to be displayed as a grid, probably
    <>
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
        <strong> Postal code:</strong> {postCode}
      </p>
    </>
  );
};

export default City;
