import axios from 'axios';

const getSingleData = async (userId) => {
  // get single user data

  const response = await axios.get(`http://localhost:5050/devs/${userId}`);

  if (!response.data) throw new Error('User data not found');

  return response.data;
};

export default getSingleData;
