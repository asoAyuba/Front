import axios from 'axios';

const API_URL = 'http://localhost:9009';

export const fetchAdoptableCats = async () => {
  try {
    const response = await axios.get(`${API_URL}/cats/adoptables`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener los gatos adoptables:', error);
    throw error;
  }
};
