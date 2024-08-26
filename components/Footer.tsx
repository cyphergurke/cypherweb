"use client"
import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

const Footer = () => {
  const f = useTranslations("Footer")


  const locale = useLocale();

  return (
    <footer className="w-full pt-20 pb-20" >


      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">

        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">

        </p>
        <a href={`mailto:${process.env.EMAIL_ADDRESS}`} >
          <MagicButton
            title={f('getintouch')}
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          No Copyright ©
        </p>
        <Link href={`${locale}/legal`} className="text-violet-500">Impressum </Link>
        <Link href={`${locale}/legal`} className="text-violet-500"> Legal </Link>
        <Link href={`${locale}/legal`} className="text-violet-500"> Privacy Policies</Link>

        <div className="flex items-center md:gap-3 gap-6 pt-5">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Link href={info.link} target="_blank">
                <Image src={info.img} alt="icons" width={40} height={40} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
