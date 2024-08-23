"use client"

import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";
import { TracingBeam } from './ui/tracing-beam';
import MagicButton from './MagicButton';
import { FaLocationArrow } from 'react-icons/fa6';
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';
import { gridItems, socialMedia } from '@/data';
import Link from "next/link";
import Image from "next/image";

const About = ({ translate }: any) => {
    const items = gridItems(translate)
    const paragraphs = translate.text.split('\n\n').map((paragraph: any, index: number) => (
        <p key={index}>{paragraph} <br /><br /></p>
    ));

    return (
        <section id="about" >
            <LampContainer>
                <motion.h1
                    initial={{ opacity: 0.5, y: 150 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.2,
                        duration: 0.5,
                        ease: "easeOut",
                    }}
                    className="bg-gradient-to-br from-slate-300 to-slate-400  bg-clip-text text-center text-4xl font-medium tracking-tight dark:text-transparent md:text-7xl -mt-44 lg:-mt-56"
                >
                    {translate.title}
                </motion.h1>
            </LampContainer>
            <TracingBeam className="px-6 -mt-72 mb-32 ">
                {paragraphs}
                <div className="flex justify-center items-center md:gap-3 gap-6 pb-5">
                    {socialMedia.map((info) => (
                        <div
                            key={info.id}
                            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                        >
                            <Link href={info.link}>
                                <Image src={info.img} alt="icons" width={40} height={40} />
                            </Link>
                        </div>
                    ))}
                </div>
                <div className='flex  justify-center items-center'>
                    <Link href="#contact">
                        <MagicButton
                            title={translate.requestFreelancerProfile}
                            icon={<FaLocationArrow />}
                            position="left"
                        />
                    </Link>
                </div>
            </TracingBeam>
            <BentoGrid
                className="w-full py-20"
            >
                {items.map((item, i) => (
                    <BentoGridItem
                        translate={translate}
                        id={item.id}
                        key={i}
                        title={item.title}
                        description={item.description}
                        className={item.className}
                        img={item.img}
                        imgClassName={item.imgClassName}
                        titleClassName={item.titleClassName}
                        spareImg={item.spareImg}
                    />
                ))}
            </BentoGrid>
        </section>
    )
}

export default About
