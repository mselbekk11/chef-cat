import Lottie from 'lottie-react';
import IconOne from '../assets/liger.json';

export default function PlayingMusic() {
  return (
    <>
      <div className='block lg:hidden'>
        <div className='text-white bg-[#E3A622] border-4 border-black'>
          <Lottie animationData={IconOne} className='w-28 h-28' />
        </div>
      </div>
      <div className='hidden lg:block'>
        <div className='text-white bg-[#E3A622] border-4 border-black'>
          <Lottie animationData={IconOne} className='w-52 h-52' />
        </div>
      </div>
    </>
  );
}
