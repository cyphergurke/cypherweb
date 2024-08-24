
import React, { useEffect, useRef, useState } from 'react'
import { GlobeIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const LanguageToggle = () => {
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
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
                onClick={toggleDropdown}
                className="border flex text-sm font-medium relative border-neutral-200 transition-all duration-500 hover:border-violet-500   dark:border-white/[0.2] text-white  px-2 py-2 rounded-full"
            >
                <GlobeIcon className='h-[1.2rem] w-[1.2rem] ' />
                <span className="sr-only">Toggle language</span>
            </button>
            <div
                className={cn(
                    'origin-top-right absolute right-0 mt-2 p-2 rounded-md shadow-lg bg-white dark:bg-black-100 dark:shadow-white-200 dark:shadow-md transition-all ',
                    isOpen
                        ? 'opacity-100 max-h-60 max-w-xs duration-700 ease-in-out'
                        : 'opacity-0 max-h-0 max-w-0 duration-700 ease-out overflow-hidden'
                )}

            >
                <div className="py-1">
                    <Link
                        href="/en"
                        className={cn(
                            "relative dark:text-white items-center  flex space-x-1 text-black    hover:text-neutral-500 dark:hover:bg-slate-800 rounded-md p-1"
                        )}
                        onClick={toggleDropdown}
                    >
                        english
                    </Link>
                    <Link
                        href="/de"
                        className={cn(
                            "relative dark:text-white items-center  flex space-x-1 text-black    hover:text-neutral-500 dark:hover:bg-slate-800 rounded-md p-1"
                        )}
                        onClick={toggleDropdown}
                    >
                        deutsch
                    </Link>
                </div>
            </div>
            {/*   )} */}
        </div>
    )
}

export default LanguageToggle
