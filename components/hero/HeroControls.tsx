"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HeroControlsProps {
    currentIndex: number;
    totalSlides: number;
    onPrevious: () => void;
    onNext: () => void;
    onDotClick: (index: number) => void;
}

export function HeroControls({
    currentIndex,
    totalSlides,
    onPrevious,
    onNext,
    onDotClick
}: HeroControlsProps) {
    return (
        <>
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 
          flex items-center space-x-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
            >
                {Array.from({ length: totalSlides }).map((_, index) => (
                    <motion.button
                        key={index}
                        className={`h-2 rounded-full transition-all duration-300 ${currentIndex === index ? 'w-8 bg-white' : 'w-2 bg-white/50'
                            }`}
                        onClick={() => onDotClick(index)}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    />
                ))}
            </motion.div>

            <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 
        flex justify-between pointer-events-none">
                <motion.button
                    className="pointer-events-auto"
                    onClick={onPrevious}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-full
            hover:bg-white/20 transition-colors">
                        <ChevronLeft className="w-6 h-6 text-white" />
                    </div>
                </motion.button>

                <motion.button
                    className="pointer-events-auto"
                    onClick={onNext}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-full
            hover:bg-white/20 transition-colors">
                        <ChevronRight className="w-6 h-6 text-white" />
                    </div>
                </motion.button>
            </div>
        </>
    );
}