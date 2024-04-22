'use client';

import Evul from '@/components/Evul';
import Fb from '@/components/Fb';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <>
      <main className=''>
        <Hero />
        <Evul />
        <Fb />
      </main>
    </>
  );
}
