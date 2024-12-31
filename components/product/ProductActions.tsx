"use client";

import { motion } from "framer-motion";
import { ShoppingCart, CreditCard } from "lucide-react";
import { useState } from "react";

interface ProductActionsProps {
    onAddToCart: () => void;
    onBuyNow: () => void;
    type: 'rent' | 'buy';
}

export function ProductActions({ onAddToCart, onBuyNow, type }: ProductActionsProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="space-y-4">
            <motion.div
                className="flex gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
            >
                <motion.button
                    onClick={onAddToCart}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-gradient-to-r from-[#1E3A5F] to-[#2c5282] text-white px-6 py-4 rounded-xl
                        hover:shadow-lg hover:from-[#2c5282] hover:to-[#1E3A5F] 
                        transform transition-all duration-300
                        flex items-center justify-center gap-3 font-medium"
                >
                    <motion.div
                        animate={{ rotate: isHovered ? 12 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ShoppingCart className="w-5 h-5" />
                    </motion.div>
                    <span>Add to Cart</span>
                </motion.button>

                <motion.button
                    onClick={onBuyNow}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-gradient-to-r from-[#25aae1] to-[#1e90ff] text-white px-6 py-4 rounded-xl
                        hover:shadow-lg hover:from-[#1e90ff] hover:to-[#25aae1]
                        transform transition-all duration-300
                        flex items-center justify-center gap-3 font-medium"
                >
                    <CreditCard className="w-5 h-5" />
                    <span>{type === 'rent' ? 'Rent Now' : 'Buy Now'}</span>
                </motion.button>
            </motion.div>

            <div className="flex items-center justify-center">
                <p className="text-sm text-gray-500">
                    Secure checkout powered by Stripe
                </p>
            </div>
        </div>
    );
}