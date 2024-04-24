'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AlignJustify } from 'lucide-react';
import MobileMenu from './MobileMenu';

import { Inter } from 'next/font/google';
import { Space_Grotesk } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
const space = Space_Grotesk({ subsets: ['latin'] });

import Marquee from 'react-fast-marquee';

export function Header() {
  const buttons = [
    { name: 'TWITTER/X', href: 'https://twitter.com/autismpowerssol' },
    { name: 'TELEGRAM', href: 'https://t.me/autismpowersportal' },
    // { name: 'DEX', href: '/' },
    {
      name: 'BUY',
      href: 'https://pump.fun/JCzn3bQ34QkRfapL6EeSkjpW7p9rY2r6EcuU13usbp3D',
    },
  ];

  return (
    <>
      <div className='mx-auto w-full bg-[#8C4EAF] flex flex-col items-center'>
        <div className='mx-auto bg w-full flex flex-col items-center p-4'>
          {/* <Image src='/header.png' alt='logo' width={1200} height={1500} className='py-10'/> */}
          {/* <Image
            src='/heading.svg'
            alt='logo'
            width={1000}
            height={1500}
            className='py-10'
          /> */}
          <h1 className='text-[#ED018C] text-4xl md:text-7xl lg:text-[12rem] hidden md:block'>
            Autism Powers
          </h1>
          <h1 className='text-[#ED018C] text-7xl block md:hidden'>
            Autism <br />
            Powers
          </h1>
        </div>
      </div>
      <header
        className={`${space.className} mx-auto w-full bg-[#fff] sticky top-0 z-50 border-y-[#000] border-t-4 lg:border-y-4`}
      >
        <nav className='mx-auto w-full flex justify-between items-center'>
          <Marquee autoFill pauseOnHover>
            <div className='flex-grow p-4'>
              <div className='flex items-center'>
                <p className='text-lg flex ml-2'>
                  CA: JCzn3bQ34QkRfapL6EeSkjpW7p9rY2r6EcuU13usbp3D
                </p>
                {/* <Image src='/1.png' alt='playing' height='30' width='30' className='ml-2'/>
                <p className='text-lg flex ml-2'>$MOJO</p> */}
                <Image
                  src='/2.png'
                  alt='playing'
                  height='30'
                  width='30'
                  className='ml-2'
                />
              </div>
            </div>
          </Marquee>
          {/* <div className='flex lg:hidden'>
            <MobileMenu />
          </div> */}
          <div className='hidden lg:flex'>
            {buttons.map((item) => (
              <div key={item.name}>
                <a href={item.href} target='_blank'>
                  <button className='text-base font-semibold text-black py-6 px-6 border-l-4 border-black bg-[#FF92D2] uk'>
                    {item.name}
                  </button>
                </a>
              </div>
            ))}
          </div>
        </nav>
      </header>
      <div
        className={`${space.className} lg:hidden flex bg-[#fff] w-full sticky top-0 z-50 border-t-4 border-black`}
      >
        {buttons.map((item) => (
          <div key={item.name} className='flex-grow'>
            <a href={item.href} target='_blank' className='w-full h-full'>
              <button className='flex items-center justify-center text-xs font-semibold text-black py-6 border-x-2 border-b-4 border-black bg-[#FF92D2] w-full h-full'>
                {item.name}
              </button>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
