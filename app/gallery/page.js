import { kGalleryImages } from '@/constant';
import { client, urlFor } from '@/lib/sanity';
import Image from 'next/image';
import React from 'react';
import PageTitle from '../ui/PageTitle';
import ImageModal from '../ui/ImageModal';
export const metadata = {
  title: 'Street Of Dreams | Gallery',
  description: 'Created by todddenmar',
};
async function getData() {
  const query = `*[_type == 'gallery']  | order(_createdAt desc) `;
  const data = await client.fetch(query);
  return data;
}
async function Page() {
  const data = await getData();
  return (
    <div className="p-5 max-w-[1500px] mx-auto">
      <div className="flex justify-center py-5">
        <PageTitle text="Gallery" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 mt-[50px]">
        {data.map((item, idx) => {
          return item.images.map((image) => {
            const src = urlFor(image).url();
            return (
              <div
                key={idx}
                className="w-full h-[200px] md:[400px] overflow-hidden relative"
              >
                <ImageModal src={src} />
              </div>
            );
          });
        })}
      </div>
    </div>
  );
}

export default Page;
