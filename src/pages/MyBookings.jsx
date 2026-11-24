import { useEffect, useState } from "react";
import { getMyBookings } from "../services/bookingService";
import TourCard from "../components/TourCard";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    try {
      const fetchMyBookings = async () => {
        const response = await getMyBookings();
        setBookings(response?.data || []);
      };
      fetchMyBookings();
    } catch (error) {
      bookings = [];
    }
  }, []);
  return (
    <main className="main">
      <div className="card-container">
        {bookings?.map((tour) => (
          <TourCard key={tour._id} tour={tour} isBookedByMe={true} />
        ))}
      </div>
    </main>
  );
};

export default MyBookings;
