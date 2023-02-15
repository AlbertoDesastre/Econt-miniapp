import "./Header.scss";

const Header = ({ imgSrc }) => {
  return (
    <header>
      {" "}
      <img src={imgSrc} alt="econt bussiness "></img>
      <h2>ECONT IMPLEMENTATION</h2>
    </header>
  );
};

export default Header;
