'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';
import MenuItem from './MenuItem';
import { kMenuItems } from '@/constant';
import { usePathname } from 'next/navigation';
import MobileMenu from './MobileMenu';
import { Switch } from '@/components/ui/switch';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from '@/lib/zustand';

function NavigationMenu() {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme((state) => state.theme);
  const switchTheme = useTheme((state) => state.switchTheme);

  return (
    <nav className="h-[80px] w-full flex flex-col justify-center md:dark:bg-black md:bg-white fixed top-0 z-50 items-center">
      <div className="px-5 md:max-w-[1500px] flex justify-between items-center md: w-full md:mx-auto xl:grid grid-cols-3 ">
        <div className="flex items-center gap-[50px] xl:col-span-2 xl:flex-1 xl:grid xl:grid-cols-2">
          <a href="/">
            <Image
              src={'/logo.png'}
              alt="street of dreams logo"
              width={50}
              height={50}
              className="object-contain"
              priority
            />
          </a>
          <ul className="items-center gap-[50px] hidden md:flex ml-auto">
            {kMenuItems.map((item, idx) => (
              <MenuItem
                key={idx}
                text={item.text}
                url={item.url}
                isActive={path === item.url}
              />
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-5">
          <button className="hidden border-none select-none md:flex ml-auto bg-amber-500 text-black font-bold h-[50px] flex-col justify-center items-center px-5 rounded-md">
            Get in touch
          </button>
          <div className="flex items-center gap-2">
            <Switch onClick={switchTheme} />
            {theme === 'dark' ? (
              <MoonIcon className="h-5 w-5" />
            ) : (
              <SunIcon className="h-5 w-5" />
            )}
          </div>
        </div>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="cursor-pointer block md:hidden"
        >
          <Bars3Icon className="h-[30px] w-[30px] dark:text-white" />
        </button>
      </div>
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </nav>
  );
}

export default NavigationMenu;
