import "./MainContent.scss";

const MainContent = ({ error, loading, onError, onLoading, children }) => {
  /*   console.log(error, loading); */
  return (
    <section className="main-section main-container">
      <div className="messages-container">
        {error && onError()}
        {loading && onLoading()}
      </div>
      <div className="dropdowns-container">{children}</div>
    </section>
  );
};

export default MainContent;
