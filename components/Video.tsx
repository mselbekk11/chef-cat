// import localFont from 'next/font/local';
// const myFont = localFont({ src: '@/fonts/Harima-X3od9.otf' });

import { Space_Grotesk } from 'next/font/google';
const space = Space_Grotesk({ subsets: ['latin'] });

export default function Video() {
  return (
    <div
      className={`${space.className} flex flex-col mx-auto max-w-4xl items-center justify-center mt-20`}
    >
      <h2 className='text-white text-[2rem]'>
        The biggest cat in existence is the liger (father is tiger, mother is
        lion) The tigon (mother is tiger, father is lion) is only about half the
        size
      </h2>
      <div className='mt-20'>
        <video width='100%' height='100%' muted autoPlay loop playsInline className='w-[1000px]'>
          <source src='https://res.cloudinary.com/dtjasyr7k/video/upload/v1714793959/istockphoto-603720108-640_adpp_is_t8m4x8.mp4' />
          Your browser does not support the video tag.
        </video>
        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/PtaCE6Cdgzo?si=R3V5FBqT9LfB1iQC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
      </div>
    </div>
  );
}
