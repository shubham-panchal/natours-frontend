const API_HOST = "http://localhost:8000/api/v1";

export const getAllTours = async () => {
  const response = await fetch(`${API_HOST}/tours`);

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  return response.json();
};

export const getTour = async (tourId) => {
  const response = await fetch(`${API_HOST}/tours/${tourId}`);

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  return response.json();
};
