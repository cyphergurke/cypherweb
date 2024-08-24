"use client"

import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import ComputersCanvas from "./canvas/Computers";
import Image from "next/image";
import { useTranslations } from "next-intl";
const Hero = () => {
  const h = useTranslations('Hero');
  const translate = {
    title: h('title'),
    subTitle: h('subTitle'),
    navHome: h('navigation.home'),
    navAbout: h('navigation.about'),
    navprojects: h('navigation.projects'),
    navContact: h('navigation.contact'),
    buttonText: h('buttonText'),
    language: h('language'),
  };

  return (
    <div className=" md:pt-36 lg:pt-36" id="home">
      <div>
        <Spotlight
          className="h-[80vh] w-[77vw] top-44 left-full"
          fill="purple"
        />
        <Spotlight
          className="-top-40 -left-10 w-full md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[77vw]" fill="blue" />
      </div>
      <div
        className="h-screen w-full dark:bg-black-100 bg-slate-300 dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
        bg-slate-300 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex flex-col lg:flex-row justify-center relative my-20  w-full   ">
        <div className="w-full lg:w-2/3 flex flex-col items-center  justify-center">

          <TextGenerateEffect
            words={translate.title}
            className="text-center lg:text-left text-[40px] md:text-5xl lg:text-6xl"
          />
          <TextGenerateEffect
            words={translate.subTitle}
            className="text-center lg:text-left md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl"
          />
        </div>
        <div className=" h-[30vh] md:h-[40vh] lg:h-[50vh] w-full  -mt-50 ">
          <ComputersCanvas />
        </div>
      </div>
      <div className="  flex justify-center items-center   ">
        <a href="#about" className=" lg:pt-20">
          <Image src="DoubleArrowDown.svg" alt="About"
            className="filter dark:invert animate-bounce " width={35} height={35} />
        </a>
      </div>
    </div>
  );
};

export default Hero;
