const API_HOST = import.meta.env.VITE_API_URL;
import axios from "axios";

export const updateProfile = async (payload) => {
  const response = await axios.patch(`${API_HOST}/users/updateMe`, payload, {
    withCredentials: true,
  });
  console.log("Update profile response:", response);
  return response?.data?.data?.user;
};

export const updateMyPassword = async (payload) => {
  const response = await axios.patch(
    `${API_HOST}/users/updateMyPassword`,
    payload,
    {
      withCredentials: true,
    },
  );
  console.log("Update profile response:", response);
  return response?.data?.data?.user;
};
