import { kGalleryImages } from '@/constant';
import Image from 'next/image';
import React from 'react';

function Page() {
  return (
    <div className="p-5 max-w-[1500px] mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {kGalleryImages.map((item, idx) => (
          <div
            key={idx}
            className="w-full h-[200px] md:[400px] overflow-hidden relative"
          >
            <Image
              src={`/images/gallery/${item.fileName}.jpg`}
              alt={item.title}
              fill
              className="object-cover object-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
