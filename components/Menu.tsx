import Image from 'next/image';

import { Inter } from 'next/font/google';
import { Space_Grotesk } from 'next/font/google';
import { Merienda } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
const space = Space_Grotesk({ subsets: ['latin'] });
const merienda = Merienda({ subsets: ['latin'] });

export default function Menu() {
  return (
    <div className='w-full flex bg-3'>
      <div className='mx-auto flex flex-col'>
        <div className='w-full'>
          <Image
            src='/Top2.png'
            alt='A cat'
            width={1400}
            height={500}
            className='w-[100vw]'
          />
        </div>
        <div className='mx-auto max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 gap-4 py-20 px-6'>
          <div className='w-full'>
            <Image
              src='/menu-3.png'
              alt='playing'
              height='400'
              width='250'
              className=' w-full shadow-lg shadow-[#737373]'
            />
          </div>
          <div className='w-full'>
            <Image
              src='/menu-4.png'
              alt='playing'
              height='400'
              width='250'
              className='w-full shadow-lg shadow-[#737373]'
            />
          </div>
        </div>

        <div className='w-full'>
          <Image
            src='/Bottom2.png'
            alt='A cat'
            width={1400}
            height={500}
            className='w-[100vw]'
          />
        </div>
      </div>
    </div>
  );
}
