import { useEffect, useState } from "react";
import TourCard from "../components/TourCard";
import { getAllTours } from "../services/tourService";

const Overview = () => {
  const [tours, setTours] = useState([]);
  useEffect(() => {
    // Fetch all tours from the API
    const fetchTours = async () => {
      try {
        const data = await getAllTours();
        setTours(data?.data?.data || []);
      } catch (error) {
        console.error("Error fetching tours:", error);
      }
    };

    fetchTours();
  }, []);

  return (
    <main className="main">
      <div className="card-container">
        {tours?.map((tour) => (
          <TourCard key={tour._id} tour={tour} />
        ))}
      </div>
    </main>
  );
};

export default Overview;
