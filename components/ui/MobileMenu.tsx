"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './sheet'
import { motion } from "framer-motion";
import Link from 'next/link';
import { cn } from '@/lib/utils';
import LanguageToggle from './LanguageToggle';
import { ModeToggle } from './ModeToggle';

const MobileMenu = ({ navItems, translate }: any) => {
    const [isVisible, setIsVisible] = useState(true);
    const [hasBackground, setHasBackground] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isOpen, setIsOpen] = React.useState(false);
    const controlNavbar = () => {
        if (typeof window !== "undefined") {
            if (window.scrollY === 0) {
                setIsVisible(true);
                setHasBackground(false);
            } else if (window.scrollY < lastScrollY) {
                setIsVisible(true);
                setHasBackground(true);
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
            <Sheet open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
                <SheetTrigger className='right-2 fixed  text-white  '>
                    <span className="   ">
                        <Image src="hamburger.svg" alt="Menu" width={40} height={40} className=" filter  invert z-10" />
                    </span>
                </SheetTrigger>
                <SheetContent className='bg-gray-600 opacity-90'>
                    <SheetHeader>

                        <div className='flex flex-row gap-4 pb-4'>
                            <ModeToggle />
                            <LanguageToggle />
                        </div>
                        <SheetTitle className='mt-10 text-white text-lg font-thin'>
                            Cypherweb Development
                        </SheetTitle>

                        <SheetDescription className="  h-screen  flex flex-col gap-y-10  text-center w-full  pt-20">
                            {navItems.map((navItem: any, idx: number) => (
                                <Link
                                    key={`link=${idx}`}
                                    href={navItem.link}
                                    className={cn(
                                        "relative  text-white items-center  flex space-x-1    dark:hover:text-neutral-300 hover:text-neutral-500"
                                    )}
                                    onClick={() => setIsOpen(false)}
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
