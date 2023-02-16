import "./UserProfile.scss";

const UserProfile = ({
  id,
  name,
  region,
  city,
  userSelected,
  setUserSelected,
  setUserSelectedInfo,
  users,
}) => {
  let active = false;
  if (id === userSelected) {
    active = true;
  }

  const onClick = () => {
    setUserSelected(id);
    /*     setUserSelectedInfo(users[userSelected]); */
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
      </ul>
    </li>
  );
};

export default UserProfile;
