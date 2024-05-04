import Image from 'next/image';

export default function PausingMusic() {
  return (
    <>
      <div className='block lg:hidden'>
        <div className='text-white bg-[#E3A622] border-4 border-black'>
          <Image
            src='/liger-still.png'
            alt='playing'
            height='112'
            width='112'
          />
        </div>
      </div>
      <div className='hidden lg:block'>
        <div className='text-white bg-[#E3A622] border-4 border-black'>
          <Image
            src='/liger-still.png'
            alt='playing'
            height='208'
            width='208'
          />
        </div>
      </div>
    </>
  );
}
