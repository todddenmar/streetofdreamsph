import React from 'react';
import PageTitle from '../ui/PageTitle';
import Image from 'next/image';
export const metadata = {
  title: 'Street Of Dreams | About Us',
  description: 'Created by todddenmar',
};
function Page() {
  return (
    <div className="p-5 max-w-[1500px] mx-auto">
      <div className="flex justify-center py-5">
        <PageTitle text="About Us" />
      </div>
      <div className="mt-[50px] md:text-2xl text-justify">
        <p>
          STREET OF DREAMS PROJECT FOR THE ARTS, PHILS., INC is a 501 (c3)
          non-profit organization dedicated to provide educational and creative
          support for our young people of diverse backgrounds in the United
          States, Philippines and the world. It is committed to transform lives
          especially the underprivileged struggling to find expressions in their
          passion for the ART.
        </p>
        <br></br>
        <p>
          Since 2010, SOD/ ARTS PROJECT had served thousands of young people in
          the United States and the Philippines.
        </p>
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
