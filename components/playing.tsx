import Lottie from 'lottie-react';
import IconOne from '../assets/vinyl.json';

export default function PlayingMusic() {
  return (
    <div className='text-white bg-[green] border-4 border-black'>
      <Lottie animationData={IconOne} className='w-52 h-52' />
    </div>
  );
}
