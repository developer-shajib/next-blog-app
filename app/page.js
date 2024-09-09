export const metadata = {
  title: 'Facebook ',
  description: 'This is social media site'
};

export default async function Home() {
  return (
    <>
      <div className='py-4 flex justify-center flex-col items-center'>
        <h1 className='text-4xl font-bold '>Home Page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quos perferendis beatae alias voluptatem autem deserunt! Veritatis, iusto! Dolores, labore!</p>
      </div>
    </>
  );
}
