import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getTour } from "../services/tourService";
import Reviews from "../components/Reviews";
import QuickFacts from "../components/QuickFacts";
import Guides from "../components/Guides";
import About from "../components/About";
import Pictures from "../components/Pictures";
import BookNow from "../components/BookNow";
import Map from "../components/Map";

const TourDetails = () => {
  const { slug } = useParams();
  const location = useLocation();
  const tourId = location.state?.tourId;
  const [tourDetails, setTourDetails] = useState(null);
  console.log("Tour ID:", tourId);
  useEffect(() => {
    // Fetch the tour details using the slug or tourId
    const fetchTourById = async () => {
      try {
        const data = await getTour(tourId);
        document.title = `Natours | ${data?.data?.data?.name || "Tour Details"}`;
        setTourDetails(data?.data?.data || null);
      } catch (error) {
        console.error("Error fetching tour details:", error);
      }
    };
    fetchTourById();
  }, [slug, tourId]);

  return (
    <>
      <section className="section-header">
        <div className="header__hero">
          <div className="header__hero-overlay">&nbsp;</div>
          <img
            className="header__hero-img"
            src={`/img/tours/${tourDetails?.imageCover}`}
            alt={tourDetails?.name}
          />
        </div>

        <div className="heading-box">
          <h1 className="heading-primary">
            <span>{tourDetails?.name}</span>
          </h1>
          <div className="heading-box__group">
            <div className="heading-box__detail">
              <svg className="heading-box__icon" aria-hidden="true">
                <use href="/img/icons.svg#icon-clock" />
              </svg>
              <span className="heading-box__text">
                {tourDetails?.duration} days
              </span>
            </div>
            <div className="heading-box__detail">
              <svg className="heading-box__icon" aria-hidden="true">
                <use href="/img/icons.svg#icon-map-pin" />
              </svg>
              <span className="heading-box__text">
                {tourDetails?.locations[0]?.description}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-description">
        <div className="overview-box">
          <div>
            <QuickFacts tourDetails={tourDetails} />
            <Guides tourDetails={tourDetails} />
          </div>
        </div>
        <About tourDetails={tourDetails} />
      </section>
      <Pictures tourDetails={tourDetails} />

      <Map locations={tourDetails?.locations} />

      <Reviews reviews={tourDetails?.reviews} />

      <BookNow tourDetails={tourDetails} />
    </>
  );
};

export default TourDetails;
