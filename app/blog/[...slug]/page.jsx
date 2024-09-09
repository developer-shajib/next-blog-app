import { blogsData } from '@/fakedata/data.js';
import getSingleBlog from '@/libs/getSingleBlog.js';
import Image from 'next/image.js';

const SingleBlog = async ({ params }) => {
  const { slug } = params;

  // const blog = await getSingleBlog(slug[0]);
  const blog = blogsData?.find((item) => item.id == slug[0]);

  return (
    <>
      <div className='py-4 flex justify-center flex-col w-[1100px] mx-auto'>
        <h1 className='text-4xl font-bold '>Single Blog Page</h1>
      </div>
      <div className='single-blog w-[1000px] mx-auto shadow-sm rounded-lg bg-white mt-7 p-8'>
        <Image
          src={blog.photo}
          width={1000}
          height={1000}
          alt='photo'
        />
        <h1 className='font-bold mt-2'>{blog.title}</h1>
        <p className='line-clamp-4 mt-3'>{blog.desc}</p>
      </div>
    </>
  );
};

export default SingleBlog;
