
import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './dropdown-menu'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { GlobeIcon } from '@radix-ui/react-icons'

const LanguageToggle = () => {
    return (
        <>
            <DropdownMenu >
                <DropdownMenuTrigger asChild>
                    <button className="border flex text-sm font-medium relative border-neutral-200 transition-all duration-500 hover:border-violet-500   dark:border-white/[0.2] text-white  px-2 py-2 rounded-full">
                        <GlobeIcon className='h-[1.2rem] w-[1.2rem] ' />
                        <span className='sr-only'>Toggle theme</span>
                    </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='pt-4' >
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
        </>
    )
}

export default LanguageToggle
