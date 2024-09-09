import axios from 'axios';

const getAllDevData = async () => {
  // get all data from app

  const response = await axios.get('http://localhost:5050/devs');

  if (!response.data) throw new Error('Devs data not found');

  return response.data;
};

export default getAllDevData;
