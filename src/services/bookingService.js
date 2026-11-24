const API_HOST = import.meta.env.VITE_API_URL;
import axios from "axios";

export const getMyBookings = async () => {
  const response = await axios.get(`${API_HOST}/bookings/my-bookings`, {
    withCredentials: true,
  });

  return response?.data?.data;
};
