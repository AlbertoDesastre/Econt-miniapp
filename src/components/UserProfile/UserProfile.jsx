import "./UserProfile.scss";

const UserProfile = ({ id, name, region, city, isSelected }) => {
  return (
    <li key={id} className={"user-container"}>
      <ul className="user-profile ">
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
