const Guides = ({ tourDetails }) => {
  return (
    <div className="overview-box__group">
      <h2 className="heading-secondary ma-bt-lg">Your tour guides</h2>
      <div className="overview-box__detail">
        <img
          className="overview-box__img"
          src={`/img/users/${tourDetails?.guides[0]?.photo}`}
          alt="Lead guide"
        />
        <span className="overview-box__label">Lead guide</span>
        <span className="overview-box__text">
          {tourDetails?.guides[0]?.name}
        </span>
      </div>
      <div className="overview-box__detail">
        <img
          className="overview-box__img"
          src={`/img/users/${tourDetails?.guides[1]?.photo}`}
          alt="Tour guide"
        />
        <span className="overview-box__label">Tour guide</span>
        <span className="overview-box__text">
          {tourDetails?.guides[1]?.name}
        </span>
      </div>
      <div className="overview-box__detail">
        <img
          className="overview-box__img"
          src={`/img/users/${tourDetails?.guides[2]?.photo}`}
          alt="Intern"
        />
        <span className="overview-box__label">Intern</span>
        <span className="overview-box__text">
          {tourDetails?.guides[2]?.name}
        </span>
      </div>
    </div>
  );
};

export default Guides;
