'use client';

import Image from 'next/image';

import { Inter } from 'next/font/google';
import { Space_Grotesk } from 'next/font/google';
import { Merienda } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
const space = Space_Grotesk({ subsets: ['latin'] });
const merienda = Merienda({ subsets: ['latin'] });

export default function Hero() {
  return (
    <div className='w-full flex bg'>
      <div className='mx-auto flex flex-col'>
        <div className='w-full'>
          <Image
            src='/top2.png'
            alt='A cat'
            width={1400}
            height={500}
            className='w-[100vw]'
          />
        </div>
        <div className='relative w-full flex items-center justify-center'>
          <Image
            src='/food-circle-b.png'
            alt='flying cat'
            width={700}
            height={500}
            className='rotate-food hidden lg:block'
          />
          {/* <Image
            src='/food-circle-b.png'
            alt='flying cat'
            width={400}
            height={500}
            className='rotate-food block lg:hidden max-w-full'
          /> */}
          <div className='lg:absolute'>
            <Image
              src='/cat-bg.png'
              alt='flying cat'
              width={250}
              height={500}
              className='ml-14 mb-4 hidden lg:block'
            />
            <Image
              src='/cat-bg.png'
              alt='flying cat'
              width={150}
              height={500}
              className='ml-6 mb-4 block lg:hidden'
            />
            <div>
              <h2 className='flex items-center justify-center text-2xl lg:text-4xl'>
                Chef Cat
              </h2>
              <h3
                className={`${merienda.className} flex items-center justify-center text-lg lg:text-3xl text-white font-black  stroke-black-800`}
              >
                $chef
              </h3>
            </div>
          </div>
        </div>
        <div className='flex items-center gap-4 justify-center py-10 sticky top-0 z-90'>
          <div className='hover-item'>
            <a href='https://x.com/ligersolana' target='_blank'>
              <button className='py-2 px-4 lg:py-4 lg:px-10 text-white bg-[#000] text-base lg:text-2xl'>
                TELEGRAM
              </button>
            </a>
          </div>
          <div className='hover-item'>
            <a
              href='https://www.dextools.io/app/en/solana/pair-explorer/ASu883q47EVN4amjChnvLxE9rZrJskURpNGQf4sqeowv?t=1714780988035'
              target='_blank'
            >
              <button className='py-2 px-4 lg:py-4 lg:px-10 text-white bg-[#000] text-base lg:text-2xl'>
                Chart
              </button>
            </a>
          </div>
          <div className='hover-item'>
            <a href='https://t.me/thebiggestcat' target='_blank'>
              <button className='py-2 px-4 lg:py-4 lg:px-10 text-white bg-[#000] text-base lg:text-2xl'>
                Twitter
              </button>
            </a>
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
