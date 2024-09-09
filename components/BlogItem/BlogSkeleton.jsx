import React from 'react';

const BlogSkeleton = () => {
  return (
    <div className='blog-item p-6 bg-slate-100 shadow-lg rounded-md flex justify-start gap-6'>
      <div className='skeleton-image bg-gray-300 w-[200px] h-[200px] rounded-md'></div>
      <div className='blog-content w-full'>
        <div className='skeleton-title bg-gray-300 h-8 w-full mb-4'></div>
        <div className='skeleton-text bg-gray-300 h-4 w-full mb-2'></div>
        <div className='skeleton-text bg-gray-300 h-4 w-5/6 mb-2'></div>
        <div className='skeleton-button bg-gray-300 h-10 w-32 mt-3 rounded-lg'></div>
      </div>
    </div>
  );
};

export default BlogSkeleton;
