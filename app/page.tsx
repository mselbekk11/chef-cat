'use client';

import Hero from '@/components/Hero';
import SideTree from '@/components/SideTree';
import SideTreeTwo from '@/components/SideTreeTwo';
import AutoPlayAudio from '@/components/AutoPlayAudio';
import Slider from '@/components/Slider';
import Video from '@/components/Video';

export default function Home() {
  return (
    <>
      <main className='bg min-h-screen p-6'>
        <Hero />
        <Slider />
        <Video />
        <Slider />
        <SideTree />
        <SideTreeTwo />
      </main>
      <AutoPlayAudio />
    </>
  );
}
