import { devsData } from '@/fakedata/data.js';
import getSingleData from '@/libs/getSingleData.js';
import Link from 'next/link.js';

export function generateMetadata({ params }) {
  return {
    title: `Facebook | ${params.userId}`,
    description: 'This is dynamic team description'
  };
}

const TeamUsername = async ({ params }) => {
  // const { name, photo } = await getSingleData(params.userId);

  const dev = devsData.find((item) => item.id == params.userId);

  return (
    <>
      <div className='bg-white m-10 p-10 w-[700px] rounded-xl'>
        <img
          className='h-[300px] w-[300px] object-cover'
          src={dev.photo}
          alt=''
        />
        <h1 className='mb-2'>{dev.name}</h1>
        <Link
          className='bg-red-700 text-white px-3 rounded-md mt-4'
          href={'/team'}>
          Back
        </Link>
      </div>
    </>
  );
};

export default TeamUsername;
