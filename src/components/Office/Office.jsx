const Office = (props) => {
  const {
    nameEn,
    address: {
      fullAddressEn,
      city: { postCode },
    },
    normalBusinessHoursFrom,
    normalBusinessHoursTo,
  } = props.office;

  const openFrom = new Date(normalBusinessHoursFrom).toLocaleTimeString();
  const openTo = new Date(normalBusinessHoursTo).toLocaleTimeString();

  return (
    <>
      <p>
        <strong>{nameEn}</strong>
      </p>
      <p>
        <strong>Address: </strong> {fullAddressEn}
      </p>
      <p>
        <strong>Postal code:</strong> {postCode}
      </p>
      <p>
        <strong>Open from: </strong> {openFrom} <strong> to: </strong> {openTo}
      </p>
    </>
  );
};

export default Office;
