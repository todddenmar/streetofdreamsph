import { kMenuItems } from '@/constant';
import { cn } from '@/lib/utils';
import { XIcon } from 'lucide-react';
import React, { useState } from 'react';

function MobileMenu({ isOpen, onClose }) {
  return (
    <div
      className={cn(
        {
          '-left-[100%]': isOpen === false,
          'left-0': isOpen === true,
        },
        'fixed h-full w-full transition-all duration-300 bg-white text-black z-50 top-0  flex flex-col items-center justify-center'
      )}
    >
      <ul className="grid w-full">
        {kMenuItems.map((item, idx) => (
          <li
            key={idx}
            className={cn(
              'px-5 text-center border-solid border-b-[0.5px] border-b-gray-300',
              {
                'border-t-gray-300 border-t-[0.5px]': idx === 0,
              }
            )}
          >
            <a
              href={item.url}
              className="h-[50px] text-lg flex flex-col justify-center"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
      <button onClick={onClose} className="absolute top-0 right-0 p-5">
        <XIcon className="h-5 w-5" />
      </button>
    </div>
  );
}

export default MobileMenu;
