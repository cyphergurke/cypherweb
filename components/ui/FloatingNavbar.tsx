"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./ModeToggle";
import Image from "next/image";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./dropdown-menu";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const [visible, setVisible] = useState(true);
  const { scrollYProgress } = useScroll();


  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        // also set true for the initial state
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-3 rounded-full border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-white items-center  flex space-x-1 text-white   dark:hover:text-neutral-300 transition-all duration-500 hover:text-violet-500  "
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className=" text-sm !cursor-pointer">{navItem.name}</span>
          </Link>
        ))}
        <DropdownMenu >
          <DropdownMenuTrigger asChild>
            <button className="border flex text-sm font-medium transition-all duration-500 hover:border-violet-500 relative border-neutral-200 dark:border-white/[0.2] text-white  px-2 py-2 rounded-full">
              <span className="text-white">
                <Image src="globe.svg" alt="language" className="filter invert" width={20} height={20} />
              </span>
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
        <ModeToggle />
      </motion.div>

    </AnimatePresence>
  );
};
