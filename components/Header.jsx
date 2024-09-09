import Link from 'next/link.js';

const Header = () => {
  return (
    <>
      <div className='bg-slate-400 py-4'>
        <ul className='flex justify-center gap-10'>
          <Link
            prefetch={true}
            href={'/'}
            className='text-white'>
            Home
          </Link>
          <Link
            prefetch={true}
            href={'/about'}
            className='text-white'>
            About
          </Link>
          <Link
            prefetch={true}
            href={'/blog'}
            className='text-white'>
            Blog
          </Link>
          <Link
            prefetch={true}
            href={'/team'}
            className='text-white'>
            Team
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Header;
