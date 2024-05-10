import Image from 'next/image';
import Link from 'next/link';

import { Inter } from 'next/font/google';
import { Space_Grotesk } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
const space = Space_Grotesk({ subsets: ['latin'] });
import Fire from './Fire';

import { Merienda } from 'next/font/google';

const merienda = Merienda({ subsets: ['latin'] });

export function Footer() {
  return (
    <div className='w-full bg-[#000] flex flex-col items-center py-20 px-6 text-center'>
      {/* <h1 className='text-[4rem] lg:text-[4rem] text-[#fff]'>
        CHEF CAT
      </h1> */}
      <Image
        src='/cat-bg.png'
        alt='flying cat'
        width={250}
        height={500}
        className='ml-14 mb-4'
      />
      <div>
        <h2 className='flex items-center justify-center text-4xl text-white'>
          Chef Cat
        </h2>
        {/* <h3
          className={`${merienda.className} flex items-center justify-center text-3xl text-white font-black  stroke-black-800`}
        >
          $chef
        </h3> */}
      </div>
      <p className={`${space.className} text-white pb-2 text-xs lg:text-base`}>
        Copyright © 2024 Chef Cat. All rights reserved.
      </p>
      <p className={`${space.className} text-white pb-2 text-xs lg:text-base`}>
        Site by{' '}
        <a
          href='https://www.meme-coin.io/'
          className='underline'
          target='_blank'
        >
          meme-coin.io
        </a>
      </p>
      {/* <Fire /> */}
    </div>
  );
}
