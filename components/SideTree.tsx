import Image from 'next/image';

export default function SideTree() {
  return (
    <div className='hidden lg:block h-screen fixed-container '>
      <div className='flex flex-col h-full'>
        <Image
          className='h-screen'
          src='/side-tree.png'
          alt='A cat'
          width={500}
          height={100}
        />
      </div>
    </div>
  );
}
