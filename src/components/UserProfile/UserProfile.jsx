import "./UserProfile.scss";

const UserProfile = ({ id, name, region, city }) => {
  return (
    <li key={id} className="user-container">
      <ul className="user-profile">
        <li className="user-name">
          <p>Username: </p>
          <p>{name}</p>
        </li>
        <li className="user-region">
          <p>Region / District: </p>
          <p>{region}</p>
        </li>
        <li className="user-city">
          <p>City: </p>
          <p>{city}</p>
        </li>
      </ul>
    </li>
  );
};

export default UserProfile;
