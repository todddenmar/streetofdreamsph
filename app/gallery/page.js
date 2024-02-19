import { kGalleryImages } from '@/constant';
import { client, urlFor } from '@/lib/sanity';
import Image from 'next/image';
import React from 'react';
async function getData() {
  const query = `*[_type == 'gallery']  | order(_createdAt desc) `;
  const data = await client.fetch(query);
  return data;
}
async function Page() {
  const data = await getData();
  return (
    <div className="p-5 max-w-[1500px] mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {data.map((item, idx) => {
          return item.images.map((image) => {
            const src = urlFor(image).url();
            console.log({ src });
            return (
              <div
                key={idx}
                className="w-full h-[200px] md:[400px] overflow-hidden relative"
              >
                <Image
                  src={src}
                  alt={'image'}
                  width={400}
                  height={400}
                  className="object-cover object-center"
                  priority
                />
              </div>
            );
          });
        })}
      </div>
    </div>
  );
}

export default Page;
