import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

function MenuItem({ text, url, isActive }) {
  return (
    <li
      className={cn(
        {
          'dark:text-amber-500 dark:border-b-amber-500 text-amber-700 border-b-amber-700 border-solid border-b-[1px]':
            isActive,
        },
        'dark:hover:text-amber-500 hover:text-amber-700 cursor-pointer h-[80px] flex flex-col justify-center select-none dark:hover:border-b-amber-500 hover:border-b-amber-700 hover:border-solid hover:border-b-[1px]'
      )}
    >
      <Link className="text-nowrap" href={url || '#'}>
        {text}
      </Link>
    </li>
  );
}

export default MenuItem;
