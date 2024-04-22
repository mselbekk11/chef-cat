import Image from 'next/image';
import Link from 'next/link';

import { Inter } from 'next/font/google';
import { Space_Grotesk } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
const space = Space_Grotesk({ subsets: ['latin'] });

export function Footer() {
  return (
    <div className='w-full bg-[#000] flex flex-col items-center py-20 px-6 text-center'>
      {/* <Image
        src='/footer-logo.png'
        alt='logo'
        width='350'
        height='50'
        className='pb-6'
      /> */}
      <h3 className='text-[#ED018C] text-[2.6rem] md:text-7xl lg:text-[8rem] mb-4'>
        Autism Powers
      </h3>
      <p className={`${space.className} text-white pb-2 text-xs lg:text-base`}>
        Copyright © 2024 Autism Powers. All rights reserved.
      </p>
      <p className={`${space.className} text-white pb-2 text-xs lg:text-base`}>
        Site by{' '}
        <a
          href='https://www.selbekk.studio'
          className='underline'
          target='_blank'
        >
          Selbekk Studio
        </a>
      </p>
    </div>
  );
}
