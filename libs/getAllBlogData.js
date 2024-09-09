const { default: axios } = require('axios');

export const getAllBlog = async () => {
  const response = await axios.get('http://localhost:5050/blogs');

  if (!response.data) throw new Error('Blog data not found');
  return response.data;
};
