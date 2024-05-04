'use client';

import Image from 'next/image';

import { Inter } from 'next/font/google';
import { Space_Grotesk } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
const space = Space_Grotesk({ subsets: ['latin'] });

export default function Hero() {
  return (
    <div className='mx-auto max-w-4xl min-h-screen flex flex-col'>
      <div className='w-full items-center flex justify-center'>
        <h1 className='text-[4rem] lg:text-[8rem] text-[#E3A622]'>
          The Biggest Cat
        </h1>
      </div>
      <div className='w-full flex items-center justify-center flex-auto'>
        <Image src='/liger-big.png' alt='A cat' width={500} height={500} />
      </div>
      <div className='flex items-center gap-2 justify-center flex-1'>
        <div className=''>
          <a href='https://x.com/ligersolana' target='_blank'>
            <Image src='/meat-2.png' alt='A cat' width={200} height={50} />
          </a>
        </div>
        <div className=''>
          <a href='https://t.me/thebiggestcat' target='_blank'>
            <Image src='/meal-3.png' alt='A cat' width={200} height={50} />
          </a>
        </div>
        <div className=''>
          <a
            href='https://www.dextools.io/app/en/solana/pair-explorer/ASu883q47EVN4amjChnvLxE9rZrJskURpNGQf4sqeowv?t=1714780988035'
            target='_blank'
          >
            <Image src='/meal-4.png' alt='A cat' width={200} height={50} />
          </a>
        </div>
      </div>
    </div>
  );
}
