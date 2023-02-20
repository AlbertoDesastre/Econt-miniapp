import "./UserSelection.scss";

const UserSelection = ({ children }) => {
  /*   console.log(children); */
  return (
    <section className="users-section ">
      <ul className="user-selection"> {children}</ul>
    </section>
  );
};

export default UserSelection;
