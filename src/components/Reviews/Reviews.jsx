const Reviews = ({ reviews }) => {
  return (
    <>
      <section className="section-reviews">
        <div className="reviews">
          {reviews?.map((review) => (
            <div className="reviews__card" key={review._id}>
              <div className="reviews__avatar">
                <img
                  className="reviews__avatar-img"
                  src={`/img/users/${review.user?.photo}`}
                  alt={review.user?.name}
                />
                <h6 className="reviews__user">{review.user?.name}</h6>
              </div>
              <p className="reviews__text">{review.review}</p>
              <div className="reviews__rating">
                {Array.from({ length: 5 }, (_, index) => (
                  <svg
                    className={`reviews__star reviews__star--${index < review.rating ? "active" : "inactive"}`}
                    key={index}
                    aria-hidden="true"
                  >
                    <use href="/img/icons.svg#icon-star" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Reviews;
