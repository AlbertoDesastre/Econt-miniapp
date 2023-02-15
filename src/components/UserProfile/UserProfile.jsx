import "./UserProfile.scss";

const UserProfile = () => {
  return (
    <article className="user-profile user-container">
      <ul className="ul-user">
        <li className="user-name">
          <p>Username: </p>
          <p>Oliver Atom</p>
        </li>
        <li className="user-region">
          <p>Region / District: </p>
          <p>Plovdiv</p>
        </li>
        <li className="user-city">
          <p>City: </p>
          <p>Asenovgrad</p>
        </li>
      </ul>
    </article>
  );
};

export default UserProfile;
