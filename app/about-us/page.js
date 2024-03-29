import React from 'react';
import PageTitle from '../ui/PageTitle';
import Image from 'next/image';
import { getDataByType } from '@/lib/queries/sanity';
import { client, urlFor } from '@/lib/sanity';

export const metadata = {
  title: 'Street Of Dreams | About Us',
  description: 'Created by todddenmar',
};
async function Page() {
  const data = await getDataByType({ type: 'about-us', client });
  const contentArray = [];
  data.forEach((item) =>
    item.content.forEach((content) =>
      content.children.forEach((child) => {
        contentArray.push(child.text);
      })
    )
  );

  return (
    <div className="p-5 max-w-[1500px] mx-auto">
      <div className="flex justify-center py-5">
        <PageTitle text="About Us" />
      </div>
      <div className="mt-[50px] md:text-2xl text-justify">
        <div className="flex flex-col">
          {contentArray.map((content, idx) => (
            <div key={`about-content-${idx}`}>
              {content}
              <br></br>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-[50px]">
        <div className="flex flex-col md:flex-row justify-center  items-center  gap-[50px]">
          <div className="overflow-hidden">
            <Image
              src={'/miguel.jpg'}
              width={300}
              height={300}
              alt="miguel"
              className="rounded-3xl"
            />
          </div>
          <div className="text-center md:text-left">
            <div>
              <h3 className="text-3xl md:text-5xl">
                Miguel Catacutan Braganza II
              </h3>
              <p className="text-sm md:text-lg mt-3 text-amber-500">
                Actor/Director-Choreographer/Show-Creator
              </p>
            </div>
            <div className="mt-5 md:mt-10 text-lg md:text-2xl text-left">
              <label>Founding President:</label>
              <p>Street of Dreams Project for the Arts, Philippines, Inc.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
