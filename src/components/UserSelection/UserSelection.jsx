import "./UserSelection.scss";

const UserSelection = ({ children }) => {
  return (
    <section className="users-section ">
      <ul> {children}</ul>
    </section>
  );
};

export default UserSelection;
