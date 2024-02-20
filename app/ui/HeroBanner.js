'use client';
import React from 'react';
import Image from 'next/image';
import { useTheme } from '@/lib/zustand';
import { Lobster } from 'next/font/google';

const lobster = Lobster({
  subsets: ['latin'],
  weight: ['400'],
});
function HeroBanner() {
  const { theme } = useTheme();
  return (
    <div className="h-screen relative w-full bg-center bg-cover bg-no-repeat dark:bg-stone-900 md:dark:bg-transparent  bg-opacity-50 overflow-hidden">
      <div
        style={{
          background: theme === 'dark' ? 'url("/stardust.png")' : 'none',
        }}
        className="absolute inset-0 z-30 opacity-60 "
      ></div>
      <div className="absolute md:relative inset-0  dark:bg-[rgba(0,0,0,0.80)] bg-[rgba(255,255,255,0.80)]  bg-opacity-80 z-10 flex flex-col items-center justify-center md:grid md:grid-cols-2 md:justify-between overflow-hidden">
        <div className="dark:text-white text-black text-center px-[20] xl:px-[100px] md:px-[50px] mx-auto">
          <h1 className={`text-2xl font-medium 2xl:text-5xl mx-5 md:mx-0 `}>
            <span
              className={`dark:text-amber-500 text-amber-700 text-4xl md:text-5xl 2xl:text-7xl  ${lobster.className}`}
            >
              Street of Dreams
            </span>{' '}
            Project For the Arts, Philippines ,Inc.
          </h1>
          <p className="dark:text-gray-400 text-gray-900 mt-5">
            A non- profit 501 C3 inc.
          </p>
        </div>
        <Image
          src={'/hero-image.png'}
          alt="hero-image"
          width={778}
          height={1000}
          className="hidden ml-auto md:block rounded-bl-[200px] h-screen object-cover object-center"
        />
      </div>
      <Image
        src={'/hero-image.png'}
        alt="hero-image"
        width={778}
        height={1000}
        className="object-cover h-full w-full object-center absolute inset-0 z-0 md:hidden"
      />
    </div>
  );
}

export default HeroBanner;
