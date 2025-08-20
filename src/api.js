import axios from 'axios';

const API_URL = "https://localhost:44335/api/properties"; // servicio de backend

export const getProperties = async (filters) => {
  const params = {};
  if (filters.name) params.name = filters.name;
  if (filters.address) params.address = filters.address;
  if (filters.minPrice) params.minPrice = filters.minPrice;
  if (filters.maxPrice) params.maxPrice = filters.maxPrice;

  const { data } = await axios.get(API_URL, { params });
  return data;
};
