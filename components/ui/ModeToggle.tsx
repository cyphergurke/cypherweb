'use client';

import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';


import React, { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils';


export function ModeToggle() {
  const { setTheme } = useTheme();


  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const toggleDropdown = () => setIsOpen(!isOpen);



  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 120) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>


      <div className="relative inline-block text-left" ref={dropdownRef}>
        <button
          onClick={toggleDropdown}
          className="border flex text-sm font-medium relative border-neutral-200 transition-all duration-500 hover:border-violet-500   dark:border-white/[0.2] text-white  px-2 py-2 rounded-full"
        >
          <SunIcon className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0   ' />
          <MoonIcon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100  ' />
          <span className='sr-only'>Toggle theme</span>
        </button>
        <div
          className={cn(
            'origin-top-right absolute mt-2 p-2 rounded-md shadow-lg bg-white dark:bg-black-100 dark:shadow-white-200 dark:shadow-md transition-all ',
            isOpen
              ? 'opacity-100 max-h-60 max-w-xs duration-700 ease-in-out'
              : 'opacity-0 max-h-0 max-w-0 duration-700 ease-out overflow-hidden'
          )}
        >
          <div className="py-1">
            <button
              className={cn(
                "relative dark:text-white items-center  flex space-x-1 text-black   dark:hover:text-neutral-300 hover:text-neutral-500 hover:bg-gray-100 rounded-md p-1"
              )}
              onClick={() => { setTheme('light'); toggleDropdown }}
            >
              Light
            </button>
            <button
              className={cn(
                "relative dark:text-white items-center  flex space-x-1 text-black   dark:hover:text-neutral-300 hover:text-neutral-500 hover:bg-gray-100 rounded-md p-1"
              )}
              onClick={() => { setTheme('dark'); toggleDropdown }}
            >
              Dark
            </button>
            <button
              className={cn(
                "relative dark:text-white items-center  flex space-x-1 text-black   dark:hover:text-neutral-300 hover:text-neutral-500 hover:bg-gray-100 rounded-md p-1"
              )}
              onClick={() => { setTheme('system'); toggleDropdown }}
            >
              System
            </button>

          </div>
        </div>
      </div>

    </>
  );
}
