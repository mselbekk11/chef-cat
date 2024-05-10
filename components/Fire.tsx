import Image from 'next/image';

export default function Fire() {
  return (
    <div className='flex w-full max-w-full'>
      <Image
        src='/fire-pixel.gif'
        alt='meme-coin'
        width={100}
        height={100}
        className='w-full'
      />
      <Image
        src='/fire-pixel.gif'
        alt='meme-coin'
        width={100}
        height={100}
        className='w-full'
      />
    </div>
  );
}
