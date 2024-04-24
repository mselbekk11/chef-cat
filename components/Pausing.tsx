import Image from 'next/image';

export default function PausingMusic() {
  return (
    <div className='text-white bg-[green] border-4 border-black'>
      <Image src='/vinyl2.png' alt='playing' height='208' width='208' />
    </div>
  );
}
