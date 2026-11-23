const QuickFacts = ({ tourDetails }) => {
  return (
    <div className="overview-box__group">
      <h2 className="heading-secondary ma-bt-lg">Quick facts</h2>
      <div className="overview-box__detail">
        <svg className="overview-box__icon" aria-hidden="true">
          <use href="/img/icons.svg#icon-calendar" />
        </svg>
        <span className="overview-box__label">Next date</span>
        <span className="overview-box__text">{tourDetails?.startDate}</span>
      </div>
      <div className="overview-box__detail">
        <svg className="overview-box__icon" aria-hidden="true">
          <use href="/img/icons.svg#icon-trending-up" />
        </svg>
        <span className="overview-box__label">Difficulty</span>
        <span className="overview-box__text">{tourDetails?.difficulty}</span>
      </div>
      <div className="overview-box__detail">
        <svg className="overview-box__icon" aria-hidden="true">
          <use href="/img/icons.svg#icon-user" />
        </svg>
        <span className="overview-box__label">Participants</span>
        <span className="overview-box__text">
          {tourDetails?.maxGroupSize} people
        </span>
      </div>
      <div className="overview-box__detail">
        <svg className="overview-box__icon" aria-hidden="true">
          <use href="/img/icons.svg#icon-star" />
        </svg>
        <span className="overview-box__label">Rating</span>
        <span className="overview-box__text">
          {tourDetails?.ratingsAverage} / 5
        </span>
      </div>
    </div>
  );
};

export default QuickFacts;
