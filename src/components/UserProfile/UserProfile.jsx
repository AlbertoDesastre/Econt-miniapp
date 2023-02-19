import "./UserProfile.scss";

const UserProfile = (props) => {
  const { id, name, region, city, cityId } = props.user;
  const [userSelected, setUserSelected] = props.userSelection;

  let active = false;
  if (id === userSelected) {
    active = true;
  }
  const onClick = () => {
    setUserSelected(id);
  };

  return (
    <li key={id} className={`user-container ${active ? "active" : null}`}>
      <ul className="user-profile " onClick={onClick}>
        <li className="user-name">
          <strong>
            <p>Username: </p>{" "}
          </strong>
          <p>{name}</p>
        </li>
        <li className="user-region">
          <p>
            {" "}
            <strong>Region/District:</strong>{" "}
          </p>
          <p> {region}</p>
        </li>
        <li className="user-city">
          <strong>
            <p>City: </p>
          </strong>
          <p>{city}</p>
        </li>
        <li className="user-city_id">
          <strong>
            <p>CityID: </p>
          </strong>
          <p>{cityId}</p>
        </li>
      </ul>
    </li>
  );
};

export default UserProfile;
