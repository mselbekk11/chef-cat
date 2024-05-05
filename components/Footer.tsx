import Image from 'next/image';
import Link from 'next/link';

import { Inter } from 'next/font/google';
import { Space_Grotesk } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
const space = Space_Grotesk({ subsets: ['latin'] });

export function Footer() {
  return (
    <div className='w-full bg-[#000] flex flex-col items-center py-20 px-6 text-center'>
      <h1 className='text-[4rem] lg:text-[8rem] text-[#E3A622]'>
        The Biggest Cat
      </h1>
      <p className={`${space.className} text-white pb-2 text-xs lg:text-base`}>
        Copyright © 2024 The Biggest Cat. All rights reserved.
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
    </div>
  );
}
