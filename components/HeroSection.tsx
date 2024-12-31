"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ShoppingBag, Car, Gift } from 'lucide-react';

interface Slide {
  watchImage: string;
  text: string;
  subText: string;
  bgColor: string;
  icon: React.ReactNode;
}

const slides: Slide[] = [
  {
    watchImage: "/images/watches.png",
    text: "Best Deal Online on Smart Watches",
    subText: "Experience the future on your wrist with our premium collection",
    bgColor: "from-blue-900 to-blue-700",
    icon: <ShoppingBag className="w-6 h-6" />,
  },
  {
    watchImage: "/images/car.jpg",
    text: "CAR RENTING at Affordable Prices",
    subText: "Drive your dreams with our exclusive rental fleet",
    bgColor: "from-blue-800 to-blue-600",
    icon: <Car className="w-6 h-6" />,
  },
  {
    watchImage: "/images/gifts.jpg",
    text: "Perfect Gifts for Your Loved Ones",
    subText: "Make every moment special with thoughtful presents",
    bgColor: "from-red-900 to-red-700",
    icon: <Gift className="w-6 h-6" />,
  },
];

const HeroSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

  const contentVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const imageVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section className="relative w-full h-[100vh] overflow-hidden">
      <motion.div
        className={`w-full h-full bg-gradient-to-br ${slides[currentIndex].bgColor}`}
        initial={false}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated background pattern */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '50px 50px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
        />

        <div
          className="relative w-full h-full max-w-7xl mx-auto px-6 lg:px-8"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="flex flex-col lg:flex-row items-center justify-center h-full gap-8 lg:gap-16"
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {/* Text Content */}
              <motion.div
                className="w-full lg:w-1/2 text-white space-y-6"
                variants={contentVariants}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.div
                  className="flex items-center space-x-3"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  {slides[currentIndex].icon}
                  <span className="text-sm uppercase tracking-wider font-medium">
                    Featured
                  </span>
                </motion.div>

                <motion.h1
                  className="text-4xl lg:text-6xl font-bold leading-tight"
                  variants={contentVariants}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {slides[currentIndex].text}
                </motion.h1>

                <motion.p
                  className="text-xl text-gray-200"
                  variants={contentVariants}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {slides[currentIndex].subText}
                </motion.p>

                <motion.button
                  className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Explore Now
                </motion.button>
              </motion.div>

              {/* Image Content */}
              {/* <motion.div
                className="relative w-full lg:w-1/2 h-[300px] lg:h-[400px]"
                style={{ perspective: 1000 }}
              >
                <motion.div
                  className="w-full h-full"
                  variants={imageVariants}
                  animate={{
                    rotateY: mousePosition.x * 15,
                    rotateX: -mousePosition.y * 15,
                    transition: {
                      type: "spring",
                      stiffness: 100,
                      damping: 30
                    }
                  }}
                >
                  <Image
                    src={slides[currentIndex].watchImage}
                    alt="Hero Image"
                    layout="fill"
                    objectFit="contain"
                    className="drop-shadow-2xl"
                    priority
                  />
                </motion.div>
              </motion.div> */}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
            {slides.map((_, index) => (
              <motion.button
                key={index}
                className={`h-2 rounded-full transition-all ${currentIndex === index ? 'w-8 bg-white' : 'w-2 bg-white/50'
                  }`}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>

          {/* Arrow Navigation */}
          <motion.button
            className="absolute left-4 top-1/2 transform -translate-y-1/2"
            onClick={() => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-full">
              <ChevronLeft className="w-6 h-6 text-white" />
            </div>
          </motion.button>

          <motion.button
            className="absolute right-4 top-1/2 transform -translate-y-1/2"
            onClick={() => setCurrentIndex((prev) => (prev + 1) % slides.length)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-full">
              <ChevronRight className="w-6 h-6 text-white" />
            </div>
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;