import Image from 'next/image.js';
import Link from 'next/link.js';

const TeamItem = ({ item }) => {
  return (
    <div
      key={item.id}
      className='team-item w-[300px]  text-center flex flex-col items-center bg-slate-200 shadow-lg py-4'>
      <Image
        className=' rounded-full object-cover'
        src={item.photo}
        alt='photo'
        width={200}
        height={200}
      />
      <div className=' '>
        <h2 className='text-lg font-bold'>{item.name}</h2>

        <p>{item.skill}</p>
        <Link
          href={`/team/${item.id}`}
          className='bg-red-600 text-white rounded-full py-1 px-4 mt-2 hover:bg-red-500 hover:transition-all hover:shadow-md'>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default TeamItem;
