import Image from 'next/image';
import Marquee from 'react-fast-marquee';

export default function Slider() {
  return (
    <div className=' py-32 bg-2 [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]'>
      <div className='w-full flex items-center justify-center'>
        {/* <h1 className='text-[#fff] text-[2rem]'>Videos</h1> */}
      </div>
      <Marquee autoFill pauseOnHover>
        <div className='flex-grow'>
          <div className='flex items-center'>
            <div className='ml-6'>
              <iframe
                width='560'
                height='315'
                src='https://www.youtube.com/embed/0p_b_SYTnCA?si=HfHJ-K68fJ24jljV'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
              ></iframe>
            </div>
            <div className='ml-6'>
              <iframe
                width='560'
                height='315'
                src='https://www.youtube.com/embed/ca3K7qXAmL0?si=KjasXz2p-jVTqldC'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
              ></iframe>
            </div>
            <div className='ml-6'>
              <iframe
                width='560'
                height='315'
                src='https://www.youtube.com/embed/JhMJKkVq4tE?si=y14v5pkyPM_6yyLH'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
              ></iframe>
            </div>
            <div className='ml-6'>
              <iframe
                width='560'
                height='315'
                src='https://www.youtube.com/embed/xgbN5QCumQU?si=phGCrAR70gNnFHJ1'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
              ></iframe>
            </div>

            {/* <Image
              src='/2.png'
              alt='playing'
              height='400'
              width='250'
              className='ml-6 drop-shadow-lg'
            />
            <Image
              src='/2.png'
              alt='playing'
              height='400'
              width='250'
              className='ml-6 drop-shadow-lg'
            />
            <Image
              src='/2.png'
              alt='playing'
              height='400'
              width='250'
              className='ml-6 drop-shadow-lg'
            />
            <Image
              src='/2.png'
              alt='playing'
              height='400'
              width='250'
              className='ml-6 drop-shadow-lg'
            />
            <Image
              src='/2.png'
              alt='playing'
              height='400'
              width='250'
              className='ml-6 drop-shadow-lg'
            /> */}
          </div>
        </div>
      </Marquee>
    </div>
  );
}
