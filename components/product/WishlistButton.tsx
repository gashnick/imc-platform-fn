"use client";

import { Heart } from "lucide-react";
import { motion } from "framer-motion";

interface WishlistButtonProps {
    isWishlisted: boolean;
    onClick: () => void;
}

export function WishlistButton({ isWishlisted, onClick }: WishlistButtonProps) {
    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onClick();
            }}
            className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md 
                ${isWishlisted
                    ? 'bg-red-500/90 hover:bg-red-600/90'
                    : 'bg-white/90 hover:bg-white'} 
                transform transition-all duration-300 z-10 shadow-md`}
        >
            <Heart
                className={`w-4 h-4 transition-colors ${isWishlisted ? "text-white" : "text-gray-700 hover:text-red-500"
                    }`}
                fill={isWishlisted ? "white" : "none"}
            />
        </motion.button>
    );
}