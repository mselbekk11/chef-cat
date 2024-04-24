import Image from 'next/image';

export default function PausingMusic() {
  return (
    <>
      <div className='block lg:hidden'>
        <div className='text-white bg-[green] border-4 border-black'>
          <Image src='/vinyl2.png' alt='playing' height='112' width='112' />
        </div>
      </div>
      <div className='hidden lg:block'>
        <div className='text-white bg-[green] border-4 border-black'>
          <Image src='/vinyl2.png' alt='playing' height='208' width='208' />
        </div>
      </div>
    </>
  );
}
