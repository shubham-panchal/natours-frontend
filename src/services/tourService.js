const API_HOST = import.meta.env.VITE_API_URL;

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
