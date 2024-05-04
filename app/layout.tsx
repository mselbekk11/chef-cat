import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
// import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import dynamic from 'next/dynamic';
import Script from 'next/script';
import localFont from 'next/font/local';

const inter = Inter({ subsets: ['latin'] });

const space = Space_Grotesk({ subsets: ['latin'] });

// const myFont = localFont({ src: './ActionIsShaded.ttf' });
const myFont = localFont({ src: './JurassicPark-BL48.ttf' });

const imageURL = `https://www.thebiggestcat.com/og.png`;

export const metadata: Metadata = {
  title: '$LIGER | The Biggest Cat',
  description:
    'The biggest cat in existence is the liger (father is tiger, mother is lion) The tigon (mother is tiger, father is lion) is only about half the size',
  openGraph: {
    images: imageURL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='!scroll-smooth'>
      <body className={myFont.className}>
        {/* <Header /> */}
        {children}
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
      <Script src='https://scripts.simpleanalyticscdn.com/latest.js' />
    </html>
  );
}
