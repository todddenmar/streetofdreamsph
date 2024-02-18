import { cn } from '@/lib/utils';
import { clsx } from 'clsx';
import React from 'react';

function MenuItem({ text, url, isActive }) {
  return (
    <li
      className={cn(
        {
          'text-amber-500 border-b-amber-500 border-solid border-b-[1px]':
            isActive,
        },
        'hover:text-amber-500 cursor-pointer h-[80px] flex flex-col justify-center select-none hover:border-b-amber-500 hover:border-solid hover:border-b-[1px]'
      )}
    >
      <a className="text-nowrap" href={url || '#'}>
        {text}
      </a>
    </li>
  );
}

export default MenuItem;
