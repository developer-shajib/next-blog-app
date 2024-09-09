import TeamItem from '@/components/TeamItem/TeamItem.jsx';
import { devsData } from '@/fakedata/data.js';
import { Suspense } from 'react';

export const metadata = {
  title: 'Facebook | Team ',
  description: 'This is Team content'
};

const Team = async () => {
  // get all data
  // const devs = await getAllDevData();
  const devs = devsData;

  return (
    <>
      <div className='w-[1100px] mx-auto'>
        <div className='py-4 flex justify-center flex-col items-center'>
          <h1 className='text-4xl font-bold '>Team Page</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quos perferendis beatae alias voluptatem autem deserunt! Veritatis, iusto! Dolores, labore!</p>
        </div>

        {/* Text Area */}
        <div className='team-box my-10 flex gap-4 w-full justify-center mx-auto flex-wrap text-center'>
          {devs?.map((item) => (
            <Suspense
              key={item.id}
              fallback={<h1>Loading Team Item...</h1>}>
              <TeamItem item={item} />
            </Suspense>
          ))}
        </div>
      </div>
    </>
  );
};

export default Team;
