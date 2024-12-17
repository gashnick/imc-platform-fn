"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { slides } from '@/data/hero-slides';
import { HeroSlide } from './HeroSlide';
import { HeroControls } from './HeroControls';

export default function HeroSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (!isHovered) {
            const interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % slides.length);
            }, 5000); // Changed to 5 seconds
            return () => clearInterval(interval);
        }
    }, [isHovered]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: (e.clientX - rect.left) / rect.width - 0.5,
            y: (e.clientY - rect.top) / rect.height - 0.5
        });
    };

    return (
        <section className="relative w-full min-h-[600px] max-h-[800px] h-[85vh] mt-6 overflow-hidden">
            <motion.div
                className={`w-full h-full bg-gradient-to-br ${slides[currentIndex].bgColor}`}
                initial={false}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
                
            >
                <div
                    className="relative w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <AnimatePresence mode="wait">
                        <HeroSlide
                            key={currentIndex}
                            slide={slides[currentIndex]}
                            mousePosition={mousePosition}
                            isActive={isHovered}
                        />
                    </AnimatePresence>

                    <HeroControls
                        currentIndex={currentIndex}
                        totalSlides={slides.length}
                        onPrevious={() => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)}
                        onNext={() => setCurrentIndex((prev) => (prev + 1) % slides.length)}
                        onDotClick={setCurrentIndex}
                    />
                </div>
            </motion.div>
        </section>
    );
}