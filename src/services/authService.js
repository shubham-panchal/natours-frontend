const API_HOST = import.meta.env.VITE_API_URL;
import axios from "axios";

export const callSignup = async (payload) => {
  const response = await axios.post(`${API_HOST}/users/signup`, payload, {
    withCredentials: true,
  });

  return response?.data?.data;
};

export const callLogin = async (payload) => {
  const response = await axios.post(`${API_HOST}/users/login`, payload, {
    withCredentials: true,
  });
  return response?.data?.data?.user;
};

export const callCurrentUser = async () => {
  const response = await axios.get(`${API_HOST}/users/me`, {
    withCredentials: true,
  });

  return response?.data?.data?.data;
};

export const callLogout = async () => {
  const response = await axios.get(`${API_HOST}/users/logout`, {
    withCredentials: true,
  });
  return response?.data;
};
