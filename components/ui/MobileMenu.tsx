"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './sheet'
import { motion } from "framer-motion";
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './dropdown-menu';
import { useTheme } from 'next-themes';

const MobileMenu = ({ navItems, translate }: any) => {
    const [isVisible, setIsVisible] = useState(true);
    const [hasBackground, setHasBackground] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const { setTheme } = useTheme();

    const controlNavbar = () => {
        if (typeof window !== "undefined") {
            if (window.scrollY === 0) {
                setIsVisible(true);
                setHasBackground(false); // No background when at the top of the page
            } else if (window.scrollY < lastScrollY) {
                setIsVisible(true);
                setHasBackground(true); // Add background when scrolling down
            } else {
                setIsVisible(false);
            }
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", controlNavbar);
            return () => {
                window.removeEventListener("scroll", controlNavbar);
            };
        }
    }, [lastScrollY]);

    return (
        <motion.div
            className={`fixed top-0 left-0 w-full h-16 z-50 flex items-center transition-all duration-1000 ${hasBackground ? "bg-black/50 backdrop-blur-md" : "bg-transparent"
                }`}
            initial={{ y: "-100%" }}
            animate={{ y: isVisible ? "0%" : "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <Sheet >
                <SheetTrigger className='right-2 fixed  text-white  '>
                    <span className="   ">
                        <Image src="hamburger.svg" alt="Menu" width={40} height={40} className=" filter  invert z-10" />
                    </span>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>

                        <div className='flex flex-row gap-4 pb-4'>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <button className="border flex text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
                                        <SunIcon className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 ' />
                                        <MoonIcon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
                                        <span className='sr-only'>Toggle theme</span>
                                        <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
                                    </button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className='pt-4' >
                                    <DropdownMenuItem onClick={() => setTheme('light')}>
                                        Light
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => setTheme('dark')}>
                                        Dark
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => setTheme('system')}>
                                        System
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <DropdownMenu >
                                <DropdownMenuTrigger asChild>
                                    <button className="border flex text-sm font-medium relative border-neutral-200 dark:border-white/[0.2]   px-4 py-2 rounded-full">
                                        <span className=" ">
                                            <Image src="globe.svg" alt="language" className="dark:filter dark:invert" width={20} height={20} />
                                        </span>
                                    </button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className='pt-4 text-black dark:text-white' >
                                    <DropdownMenuItem >
                                        <Link
                                            href="/en"
                                            className={cn(
                                                "relative dark:text-white items-center  flex space-x-1 text-black   dark:hover:text-neutral-300 hover:text-neutral-500"
                                            )}
                                        >
                                            <span className=" text-sm !cursor-pointer">english</span>
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem >
                                        <Link
                                            href="/de"
                                            className={cn(
                                                "relative dark:text-white items-center  flex space-x-1 text-black   dark:hover:text-neutral-300 hover:text-neutral-500"
                                            )}
                                        >
                                            <span className=" text-sm !cursor-pointer">deutsch</span>
                                        </Link>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                        <SheetTitle className='mt-10'>
                            Cypherweb Development
                        </SheetTitle>

                        <SheetDescription className="  h-screen  flex flex-col gap-y-10  text-center w-full  pt-20">

                            {navItems.map((navItem: any, idx: number) => (
                                <Link
                                    key={`link=${idx}`}
                                    href={navItem.link}
                                    className={cn(
                                        "relative dark:text-white items-center  flex space-x-1 text-black   dark:hover:text-neutral-300 hover:text-neutral-500"
                                    )}
                                >
                                    <span className="block sm:hidden">{navItem.icon}</span>
                                    <span className=" text-sm !cursor-pointer">{navItem.name}</span>
                                </Link>
                            ))}
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </motion.div>
    )
}

export default MobileMenu
