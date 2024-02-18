import React from 'react';
import Image from 'next/image';

function HeroBanner() {
  return (
    <div className="h-screen relative w-full bg-center bg-cover bg-no-repeat bg-slate-900 bg-opacity-50 overflow-hidden">
      <div className="absolute md:relative inset-0 bg-black bg-opacity-80 z-10 flex flex-col items-center justify-center md:grid md:grid-cols-2 md:justify-between overflow-hidden">
        <div className="text-white text-center px-[50px] md:px-[20px] mx-auto">
          <h1 className={`text-3xl font-medium 2xl:text-5xl`}>
            <span className="text-amber-500">Street of Dreams</span> Project For
            the Arts, Philippines ,Inc.
          </h1>
          <p className="text-gray-400 mt-5">A non- profit 501 C3 inc.</p>
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
