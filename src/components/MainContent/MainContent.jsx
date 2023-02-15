const MainContent = ({ error, loading, onError, onLoading, children }) => {
  console.log(error);
  return (
    <section className="main-section main-container">
      <div className="messages-container">
        {error && onError()}
        {loading && onLoading()}
      </div>
      {children}
    </section>
  );
};

export default MainContent;
