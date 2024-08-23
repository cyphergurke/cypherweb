"use client"
import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import Link from "next/link";
import { useLocale } from "next-intl";

const Footer = ({ translate }: any) => {

  const locale = useLocale();

  return (
    <footer className="w-full pt-20 pb-20" >


      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">

        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">

        </p>
        <a href="mailto:david.witten@cypherweb.dev">
          <MagicButton
            title={translate.getintouch}
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex flex-col pt-7 text-center md:text-left lg:text-left ">
        <p>Cypherweb Development</p>
        <p>David Witten</p>
        <p>Herzberger Landstraße</p>
        <p>37085 Göttingen</p>
        <Link href="tel:+491715186152" className="mt-5 text-teal-500">
          +49 171 5186152</Link>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          No Copyright ©
        </p>
        <Link href={`${locale}/legal`} >Terms of use</Link>
        <div className="flex items-center md:gap-3 gap-6 pt-5">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={40} height={40} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
