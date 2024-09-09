import axios from 'axios';

const getSingleBlog = async (slug) => {
  // get all data from app

  const response = await axios.get(`http://localhost:5050/blogs?slug=${slug}`);

  if (!response.data) throw new Error('Blog data not found');

  return response.data;
};

export default getSingleBlog;
