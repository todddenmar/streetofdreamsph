import { kEvents } from '@/constant';
import moment from 'moment/moment';
import React from 'react';
import { Advent_Pro } from 'next/font/google';
import { MapPinIcon } from '@heroicons/react/24/solid';
import PageTitle from '../ui/PageTitle';
export const metadata = {
  title: 'Street Of Dreams | Events',
  description: 'Created by todddenmar',
};
const advent_pro = Advent_Pro({ subsets: ['latin'], weight: ['300'] });

function Page() {
  return (
    <div className="p-5 max-w-[1500px] mx-auto">
      <div className="flex justify-center py-5">
        <PageTitle text="Events" />
      </div>
      <div className="grid gap-12 mt-[50px] ">
        {kEvents.map((item, idx) => {
          const date = moment(item.date).format('DD');
          const month = moment(item.date).format('MMM');
          const day = moment(item.date).format('dddd');
          return (
            <div
              key={idx}
              className="dark:bg-stone-950 p-5 border border-solid border-amber-500 rounded-xl"
            >
              <div className="flex gap-2">
                <div className="dark:text-amber-500 text-amber-700">
                  {item.eventName}
                </div>

                <div className="text-sm flex gap-2 items-center">
                  <MapPinIcon className="h-[16px] w-[16px] " />
                  {item.address}
                </div>
              </div>
              {item.note && (
                <div className="mt-1">
                  <p className="text-sm text-gray-500">{item.note}</p>
                </div>
              )}

              <div className="flex gap-10 md:items-center mt-2">
                <div>
                  <div className={`${advent_pro.className} text-4xl`}>
                    <span>{date}</span>{' '}
                    <span className="uppercase">{month}</span>
                  </div>
                  <div>{day}</div>
                </div>
                <div className="grid md:grid-cols-6 gap-[50px]">
                  {item.schedules.map((sched, i) => {
                    return (
                      <div key={i}>
                        <div>{sched.time}</div>
                        <div className="text-amber-500">
                          {sched.scheduleName}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Page;
