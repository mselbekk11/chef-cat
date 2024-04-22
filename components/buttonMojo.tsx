import { Inter } from 'next/font/google';
import { Space_Grotesk } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
const space = Space_Grotesk({ subsets: ['latin'] });
import Image from 'next/image';

export default function buttonMojo() {
  return (
    <button className={`${space.className} border-2 border-black px-6 py-6 text-lg bg-[#FF92D2] text-black font-semibold mt-10 flex justify-center items-center uk`}>BUY $MOJO</button>
  )
}

{/* <button className={`${space.className} border-2 border-black pl-6 text-2xl bg-[#FF92D2] text-black font-semibold mt-10 flex justify-center items-center`}>Buy $Mojo<Image src='/mojo.png' alt='mojo' height='100' width='80' /></button> */}