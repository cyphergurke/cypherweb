"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";


export const LampContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "relative flex min-h-screen flex-col items-center justify-center overflow-hidden dark:bg-slate-950 w-full rounded-md z-0",
                className
            )}
        >
            <div className="relative flex w-full flex-1 scale-y-75 md:scale-y-125 lg:scale-y-125 items-center justify-center isolate z-0">
                {/* Left conic gradient lamp effect */}
                <motion.div
                    initial={{ opacity: 0.5, width: "15%" }}
                    whileInView={{ opacity: 1, width: "30%" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    style={{
                        backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                    }}
                    className="absolute inset-auto right-1/2 h-56 bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
                >
                    <div className="absolute w-full left-0 dark:bg-slate-950 bg-slate-300 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
                    <div className="absolute w-40 h-full left-0 dark:bg-slate-950 bg-slate-300 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
                </motion.div>

                {/* Right conic gradient lamp effect */}
                <motion.div
                    initial={{ opacity: 0.5, width: "15%" }}
                    whileInView={{ opacity: 1, width: "30%" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    style={{
                        backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                    }}
                    className="absolute inset-auto left-1/2 h-56 bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
                >
                    <div className="absolute w-40 h-full right-0 dark:bg-slate-950 bg-slate-300 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
                    <div className="absolute w-full right-0 dark:bg-slate-950 bg-slate-300 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
                </motion.div>

                {/* Lamp shadow */}
                <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-300 dark:bg-slate-950 blur-2xl"></div>
                <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
                <div className="absolute inset-auto z-50 h-36 w-1/3 -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div>

                <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] dark:bg-slate-950 bg-slate-300"></div>
            </div>

            <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
                {children}
            </div>
        </div>
    );
};