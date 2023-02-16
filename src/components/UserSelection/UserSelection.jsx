import "./UserSelection.scss";

const UserSelection = ({ children }) => {
  return (
    <section className="users-section ">
      <ul className="user-selection"> {children}</ul>
    </section>
  );
};

export default UserSelection;
