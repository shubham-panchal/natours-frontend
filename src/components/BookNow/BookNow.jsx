import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const BookNow = ({ tourDetails }) => {
  const tourId = tourDetails?._id;
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isBooking, setIsBooking] = useState(false);

  const handleBookTour = async () => {
    if (!user) {
      navigate("/login");
      return;
    }

    if (!tourId) {
      toast.error("Tour details are unavailable. Please try again.");
      return;
    }

    setIsBooking(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/bookings/checkout-session/${tourId}`,
        { withCredentials: true },
      );
      const checkoutUrl = response.data?.session?.url;

      if (!checkoutUrl) {
        throw new Error("Checkout session URL was not returned.");
      }

      window.location.assign(checkoutUrl);
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          "Unable to start checkout. Please try again.",
      );
    } finally {
      setIsBooking(false);
    }
  };

  return (
    <section className="section-cta">
      <div className="cta">
        <div className="cta__img cta__img--logo">
          <img src="/img/logo-white.png" alt="Natours logo" />
        </div>
        <img
          className="cta__img cta__img--1"
          src={`/img/tours/${tourDetails?.images[1]}`}
          alt=""
        />
        <img
          className="cta__img cta__img--2"
          src={`/img/tours/${tourDetails?.images[2]}`}
          alt=""
        />
        <div className="cta__content">
          <h2 className="heading-secondary">What are you waiting for?</h2>
          <p className="cta__text">
            {tourDetails?.duration} days. 1 adventure. Infinite memories. Make
            it yours today!
          </p>
          <button
            className="btn btn--green span-all-rows"
            onClick={handleBookTour}
            disabled={isBooking}
          >
            {isBooking
              ? "Redirecting to checkout..."
              : user
                ? "Book tour now!"
                : "Log in to book tour"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookNow;
