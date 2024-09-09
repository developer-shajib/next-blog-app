import Image from 'next/image.js';
import Link from 'next/link.js';

const BlogItem = ({ item }) => {
  return (
    <div className='blog-item p-6 bg-slate-100 shadow-lg rounded-md flex justify-start gap-6'>
      <Image
        className='object-cover'
        width={300}
        height={300}
        src={item?.photo}
        alt='photo'
      />
      <div className='blog-content'>
        <h2 className='font-bold text-2xl mb-4'>{item.title}</h2>
        <p className='text-base line-clamp-3'>{item.desc}</p>
        <Link
          className='p-3 bg-blue-900 py-2 text-white inline-block mt-3 rounded-lg '
          href={`/blog/${item.id}`}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
