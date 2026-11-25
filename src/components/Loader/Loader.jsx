const Loader = ({ message = "Loading..." }) => (
  <div className="loader" role="status">
    <span className="loader__spinner" aria-hidden="true" />
    <span>{message}</span>
  </div>
);

export default Loader;
