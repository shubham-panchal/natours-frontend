const Pictures = ({ tourDetails }) => {
  return (
    <section className="section-pictures">
      {tourDetails?.images?.map((image, index) => (
        <div className="picture-box" key={index}>
          <img
            className={`picture-box__img picture-box__img--${index + 1}`}
            src={`/img/tours/${image}`}
            alt={tourDetails?.name}
          />
        </div>
      ))}
    </section>
  );
};

export default Pictures;
