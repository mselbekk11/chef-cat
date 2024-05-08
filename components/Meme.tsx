import Image from 'next/image';

import { Inter } from 'next/font/google';
import { Space_Grotesk } from 'next/font/google';
import { Merienda } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
const space = Space_Grotesk({ subsets: ['latin'] });
const merienda = Merienda({ subsets: ['latin'] });

export default function Meme() {
  return (
    <div className='w-full flex bg-2'>
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
        {/* <div className='mx-auto max-w-4xl w-full grid grid-cols-2 gap-4 py-20'>
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
        </div> */}
        <div className='mx-auto max-w-7xl w-full my-20 px-6'>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4'>
            <div className=''>
              <Image
                src='/A.png'
                alt='playing'
                height='400'
                width='250'
                className='w-full'
              />
            </div>
            <div className=''>
              <Image
                src='/B.png'
                alt='playing'
                height='400'
                width='250'
                className='w-full'
              />
            </div>
            <div className=''>
              <Image
                src='/4.png'
                alt='playing'
                height='400'
                width='250'
                className='w-full'
              />
            </div>
            <div className=''>
              <Image
                src='/5.png'
                alt='playing'
                height='400'
                width='250'
                className='w-full'
              />
            </div>
            <div className=''>
              <Image
                src='/20.png'
                alt='playing'
                height='400'
                width='250'
                className='w-full'
              />
            </div>
            <div className=''>
              <Image
                src='/19.png'
                alt='playing'
                height='400'
                width='250'
                className='w-full'
              />
            </div>
            <div className=''>
              <Image
                src='/6.png'
                alt='playing'
                height='400'
                width='250'
                className='w-full'
              />
            </div>
            <div className=''>
              <Image
                src='/17.png'
                alt='playing'
                height='400'
                width='250'
                className='w-full'
              />
            </div>
          </div>

          <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
            <div className=''>
              <Image
                src='/8.png'
                alt='playing'
                height='400'
                width='250'
                className='w-full'
              />
            </div>
            <div className=''>
              <Image
                src='/9.png'
                alt='playing'
                height='400'
                width='250'
                className='w-full'
              />
            </div>
            <div className=''>
              <Image
                src='/10.png'
                alt='playing'
                height='400'
                width='250'
                className='w-full'
              />
            </div>
            <div className=''>
              <Image
                src='/11.png'
                alt='playing'
                height='400'
                width='250'
                className='w-full'
              />
            </div>
            <div className=' '>
              <Image
                src='/13.png'
                alt='playing'
                height='400'
                width='250'
                className='w-full'
              />
            </div>
            <div className=''>
              <Image
                src='/12.png'
                alt='playing'
                height='400'
                width='250'
                className='w-full'
              />
            </div>
            <div className=''>
              <Image
                src='/16.png'
                alt='playing'
                height='400'
                width='250'
                className='w-full'
              />
            </div>
            <div className=''>
              <Image
                src='/15.png'
                alt='playing'
                height='400'
                width='250'
                className='w-full'
              />
            </div>
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
