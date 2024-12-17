"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Slide } from "@/types/hero";

interface HeroSlideProps {
    slide: Slide;
    mousePosition: { x: number; y: number };
    isActive: boolean;
}

export function HeroSlide({ slide, mousePosition, isActive }: HeroSlideProps) {
    const contentVariants = {
        initial: { opacity: 0, x: -50 },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: 0.2
            }
        },
        exit: {
            opacity: 0,
            x: 50,
            transition: {
                duration: 0.5
            }
        }
    };

    const imageVariants = {
        initial: { opacity: 0, scale: 0.8 },
        animate: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: 0.4
            }
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full items-center py-8 md:py-12"
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <motion.div
                className="space-y-6 text-white max-w-xl mx-auto lg:mx-0"
                variants={contentVariants}
            >
                <motion.div
                    className="flex items-center space-x-3"
                    whileHover={{ scale: 1.05 }}
                >
                    {slide.icon}
                    <span className="text-sm uppercase tracking-wider font-medium">
                        Featured
                    </span>
                </motion.div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                    {slide.text}
                </h1>

                <p className="text-lg sm:text-xl text-gray-200">
                    {slide.subText}
                </p>

                <a href="http://imc.rw/Products" className=" ">
                    <motion.button
                        className="bg-white text-blue-900 px-6 sm:px-8 py-3 sm:py-4 mt-5 rounded-full 
    font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl transform-gpu"
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                        }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Explore Now
                    </motion.button>
                </a>
            </motion.div>

            <motion.div
                className="relative w-full h-[300px] sm:h-[400px] lg:h-[450px] max-w-lg mx-auto
          transform-gpu perspective-1000"
                variants={imageVariants}
                style={{
                    transformStyle: "preserve-3d",
                    transform: isActive ? `
            rotateY(${mousePosition.x * 15}deg)
            rotateX(${-mousePosition.y * 15}deg)
          ` : "none"
                }}
            >
                <div className="absolute inset-0 rounded-3xl overflow-hidden bg-transparent">
                    <Image
                        src={slide.watchImage}
                        alt={slide.text}
                        fill
                        className="object-contain transform-gpu hover:scale-105 
              transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority
                    />

                    {/* Subtle lighting effect */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0"
                        animate={{
                            opacity: isActive ? 0.5 : 0,
                            x: mousePosition.x * 20,
                            y: mousePosition.y * 20,
                        }}
                        transition={{ duration: 0.2 }}
                    />
                </div>
            </motion.div>
        </motion.div>
    );
}