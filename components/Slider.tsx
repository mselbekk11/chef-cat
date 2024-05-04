import Image from 'next/image';
import Marquee from 'react-fast-marquee';

export default function Slider() {
  return (
    <>
      <div className='w-full flex items-center justify-center mt-10'>
        <h1 className='text-[#E3A622] text-[6rem]'>$LIGER</h1>
      </div>
      <Marquee autoFill pauseOnHover>
        <div className='flex-grow p-4'>
          <div className='flex items-center'>
            <Image
              src='/liger-1.png'
              alt='playing'
              height='400'
              width='400'
              className='ml-6 drop-shadow-lg'
            />
            <Image
              src='/liger-2.png'
              alt='playing'
              height='400'
              width='400'
              className='ml-6 drop-shadow-lg'
            />
            <Image
              src='/liger-4.png'
              alt='playing'
              height='400'
              width='400'
              className='ml-6 drop-shadow-lg'
            />
            <Image
              src='/liger-3.png'
              alt='playing'
              height='400'
              width='400'
              className='ml-6 drop-shadow-lg'
            />
          </div>
        </div>
      </Marquee>
    </>
  );
}
