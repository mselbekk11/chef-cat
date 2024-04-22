'use client';

import Image from 'next/image';

import { Inter } from 'next/font/google';
import { Space_Grotesk } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
const space = Space_Grotesk({ subsets: ['latin'] });
import ButtonMojo from '@/components/buttonMojo';

export default function Fb() {
  return (
    <div className='mx-auto w-full grid  grid-cols-1 lg:grid-cols-2 text-white border-b-4 border-black'>
      <div className='flex flex-col items-center text-center bg-[#FFC900] py-20 lg:py-40 px-4 bg lg:border-r-2 border-black border-b-4 lg:border-b-0'>
        <h2 className='text-white text-[4rem] md:text-[4rem] lg:text-[5rem]'>
          This Diapers making my nuts rub together, its gon start a fire
        </h2>
        <ButtonMojo />
      </div>
      <div className='flex flex-col items-center justify-center bg-[#1A66B1] lg:border-l-2 border-black px-4 py-20 relative'>
        <Image
          src='/FB.png'
          alt='austin'
          width='750'
          height='300'
          className='z-30'
        />
        {/* <Image
          src='/1.png'
          alt='austin'
          width='100'
          height='50'
          className='floating absolute bottom-60 left-40 z-20'
        />
        <Image
          src='/2.png'
          alt='austin'
          width='100'
          height='50'
          className='floating absolute bottom-20 right-44 z-20'
        />
        <Image
          src='/3.png'
          alt='austin'
          width='100'
          height='50'
          className='floating absolute top-10 right-40 z-20'
        />
        <Image
          src='/4.png'
          alt='austin'
          width='130'
          height='50'
          className='floating absolute bottom-70 right-64 z-20'
        /> */}
      </div>
    </div>
  );
}
