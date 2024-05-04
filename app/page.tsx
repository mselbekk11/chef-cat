'use client';

import Hero from '@/components/Hero';
import SideTree from '@/components/SideTree';
import SideTreeTwo from '@/components/SideTreeTwo';

export default function Home() {
  return (
    <>
      <main className='bg min-h-screen p-6'>
        <Hero />
        <SideTree />
        <SideTreeTwo />
      </main>
    </>
  );
}
