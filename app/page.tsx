'use client';

import Hero from '@/components/Hero';
import Meme from '@/components/Meme';
import Menu from '@/components/Menu';
// import SideTree from '@/components/SideTree';
// import SideTreeTwo from '@/components/SideTreeTwo';
// import AutoPlayAudio from '@/components/AutoPlayAudio';
import Slider from '@/components/Slider';
import Video from '@/components/Video';

export default function Home() {
  return (
    <>
      <main className='min-h-screen'>
        <Hero />
        <Slider />
        <Menu />
        <Meme />
        {/* <Video /> */}
        {/* <SideTree />
        <SideTreeTwo /> */}
      </main>
      {/* <AutoPlayAudio /> */}
    </>
  );
}
