'use client';

import Image from 'next/image';

import { Inter } from 'next/font/google';
import { Space_Grotesk } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
const space = Space_Grotesk({ subsets: ['latin'] });
import ButtonMojo from '@/components/buttonMojo';

export default function Evul() {
  return (
    <div className='mx-auto w-full grid  grid-cols-1 lg:grid-cols-2 text-white border-b-4 border-black'>
      <div className='flex flex-col items-center justify-center bg-[#252525] lg:border-r-2 border-black px-4 py-20 relative order-2 lg:order-1'>
        <Image
          src='/all.png'
          alt='austin'
          width='650'
          height='300'
          className='z-30'
        />
        {/* <Image
          src='/chartone.png'
          alt='austin'
          width='300'
          height='50'
          className='floating absolute bottom-20 left-20 z-20'
        />
        <Image
          src='/chart-2.png'
          alt='austin'
          width='300'
          height='50'
          className='floating absolute top-20 right-44 z-20'
        />
        <Image
          src='/MM.png'
          alt='austin'
          width='250'
          height='50'
          className='floating absolute bottom-10 right-40 z-40'
        /> */}
      </div>
      <div className='flex flex-col items-center text-center bg-[#7939A9] py-20 lg:py-40 px-4 bg lg:border-l-2 border-black order-1 lg:order-2 border-b-4 lg:border-b-0'>
        <h2 className='text-white text-[4rem] md:text-[4rem] lg:text-[5rem]'>
          Charts with frikin laser beams attached to their frikin heads
        </h2>
        <ButtonMojo />
      </div>
    </div>
  );
}
