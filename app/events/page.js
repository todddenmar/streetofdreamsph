import { kEvents } from '@/constant';
import moment from 'moment/moment';
import React from 'react';
import { Advent_Pro } from 'next/font/google';
import { MapPinIcon } from '@heroicons/react/24/solid';

const advent_pro = Advent_Pro({ subsets: ['latin'], weight: ['300'] });

function Page() {
  return (
    <div className="p-5 max-w-[1500px] mx-auto">
      <div className="grid gap-12">
        {kEvents.map((item, idx) => {
          const date = moment(item.date).format('DD');
          const month = moment(item.date).format('MMM');
          const day = moment(item.date).format('dddd');
          return (
            <div key={idx}>
              <div>{item.eventName}</div>
              <div className="text-xs flex gap-2 items-center">
                <MapPinIcon className="h-[16px] w-[16px] " />
                {item.address}
              </div>
              {item.note && (
                <div className="mt-2">
                  <p className="text-xs text-gray-500">{item.note}</p>
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
