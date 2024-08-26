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
import LanguageToggle from "./LanguageToggle";
import { useTranslations } from "next-intl";
import { navItems } from "@/data";
import { useLocale } from 'next-intl';



export const FloatingNav = ({
  className,
}: {
  className?: string;
}) => {
  const [visible, setVisible] = useState(true);
  const { scrollYProgress } = useScroll();
  const locale = useLocale();

  const h = useTranslations('Hero');
  const heroTranslations = {
    title: h('title'),
    subTitle: h('subTitle'),
    navHome: h('navigation.home'),
    navAbout: h('navigation.about'),
    navprojects: h('navigation.projects'),
    navContact: h('navigation.contact'),
    buttonText: h('buttonText'),
    language: h('language'),
    locale: locale
  };
  const navigationItems = navItems(heroTranslations)


  // animation to hide the navigation on scrolling down
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
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
        {navigationItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-white items-center  flex space-x-1 text-white   dark:hover:text-violet-500 transition-all duration-500 hover:text-violet-500  "
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className=" text-sm !cursor-pointer">{navItem.name}</span>
          </Link>
        ))}
        <LanguageToggle />
        <ModeToggle />
      </motion.div>

    </AnimatePresence>
  );
};
