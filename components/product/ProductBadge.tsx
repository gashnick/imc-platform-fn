"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface ProductBadgeProps {
    type: 'rent' | 'buy';
}

export function ProductBadge({ type }: ProductBadgeProps) {
    return (
        <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute top-3 left-0 z-10"
        >
            <div className={`py-1.5 pl-3 pr-4 text-xs font-semibold text-white rounded-r-full shadow-md 
                flex items-center gap-1.5 backdrop-blur-sm
                ${type === 'rent'
                    ? 'bg-gradient-to-r from-[#25aae1]/90 to-[#1e90ff]/90'
                    : 'bg-gradient-to-r from-[#1E3A5F]/90 to-[#2c5282]/90'
                }`}
            >
                <Sparkles className="w-3 h-3" />
                <span>{type === 'rent' ? 'For Rent' : 'For Sale'}</span>
            </div>
        </motion.div>
    );
}