'use client';

import Hero from '@/components/Hero';
import Meme from '@/components/Meme';
import Menu from '@/components/Menu';
import Slider from '@/components/Slider';

export default function Home() {
  return (
    <>
      <main className='min-h-screen'>
        <Hero />
        <Slider />
        <Menu />
        <Meme />
      </main>
    </>
  );
}
