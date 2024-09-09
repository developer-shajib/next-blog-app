import BlogItem from '@/components/BlogItem/BlogItem.jsx';
import BlogSkeleton from '@/components/BlogItem/BlogSkeleton.jsx';
import { blogsData } from '@/fakedata/data.js';
import { getAllBlog } from '@/libs/getAllBlogData.js';
import Image from 'next/image.js';
import Link from 'next/link.js';
import { Suspense } from 'react';

export const metadata = {
  title: 'Facebook | Blog',
  description: 'This is blog content'
};

const Blog = async () => {
  // const blogs = await getAllBlog();
  const blogs = blogsData;

  return (
    <>
      <div className='py-4 flex justify-center flex-col w-[1100px] mx-auto'>
        <h1 className='text-4xl font-bold '>Blog Page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quos perferendis beatae alias voluptatem autem deserunt! Veritatis, iusto! Dolores, labore!</p>

        <div className='blog-box mt-4'>
          {blogs?.map((item) => (
            <Suspense
              key={item.id}
              fallback={<BlogSkeleton />}>
              <BlogItem item={item} />
            </Suspense>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
