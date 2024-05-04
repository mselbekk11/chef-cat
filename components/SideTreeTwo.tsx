import Image from 'next/image';

export default function SideTreeTwo() {
  return (
    <div className='hidden lg:block h-screen fixed-container-two '>
      <div className='flex flex-col h-full'>
        <Image
          className='h-screen'
          src='/side-tree-2.png'
          alt='A cat'
          width={500}
          height={100}
        />
      </div>
    </div>
  );
}
