import { useEffect, useState } from "react";
import TourCard from "../../components/TourCard/TourCard";
import Loader from "../../components/Loader/Loader";
import { getAllTours } from "../../services/tourService";

const Overview = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const data = await getAllTours();
        setTours(data?.data?.data || []);
      } catch (error) {
        console.error("Error fetching tours:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTours();
  }, []);

  return (
    <main className="main" aria-busy={isLoading}>
      {isLoading ? (
        <Loader message="Loading tours..." />
      ) : (
        <div className="card-container">
          {tours.map((tour) => (
            <TourCard key={tour._id} tour={tour} />
          ))}
        </div>
      )}
    </main>
  );
};

export default Overview;
