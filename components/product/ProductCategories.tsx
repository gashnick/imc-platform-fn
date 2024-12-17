"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Filter } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
    { id: "gadgets", label: "Gadgets", icon: "💻" },
    { id: "fashion", label: "Fashion", icon: "👕" },
    { id: "toys", label: "Toys", icon: "🎮" },
    { id: "education", label: "Education", icon: "📚" },
    { id: "beauty", label: "Beauty", icon: "💄" },
    { id: "fitness", label: "Fitness", icon: "💪" },
    { id: "furniture", label: "Furniture", icon: "🪑" },
    { id: "sneakers", label: "Sneakers", icon: "👟" },
    { id: "Cars", label: "cars", icon: "🚗" },
    { id: "parts", label: "Spares parts", icon: "🛠" },
    { id: "service", label: "Service", icon: "🧤" },
    { id: "houses", label: "Houses", icon: "🏡" },
    { id: "medication", label: "medication", icon: "💊" },
];

export function ProductCategories() {
    const [selectedCategory, setSelectedCategory] = useState("gadgets");
  

    const handleScroll = (direction: "left" | "right") => {
        const container = document.getElementById("category-container");
        if (container) {
            const scrollAmount = direction === "left" ? -200 : 200;
            container.scrollBy({ left: scrollAmount, behavior: "smooth" });
            
        }
    };

    return (
        <div className="relative container  mx-auto px-4 py-6">
            <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                    <Filter className="w-5 h-5 text-[#1E3A5F]" />
                    <h2 className="text-lg font-semibold text-[#1E3A5F]">Search your  product</h2>
                </div>
            </div>

            <div className="relative">
                {/* Scroll Buttons */}
                <button
                    onClick={() => handleScroll("left")}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white transition-all duration-300 hidden md:block"
                >
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                <button
                    onClick={() => handleScroll("right")}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white transition-all duration-300 hidden md:block"
                >
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>

                {/* Categories Container */}
                <div
                    id="category-container"
                    className="flex gap-2 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-px-4 pt-2 pb-2"
                >
                    {categories.map((category) => (
                        <motion.button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={cn(
                                "snap-start flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300",
                                "whitespace-nowrap text-sm font-medium min-w-fit",
                                "hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25aae1]",
                                selectedCategory === category.id
                                    ? "bg-gradient-to-r from-[#1E3A5F] to-[#25aae1] text-white shadow-lg"
                                    : "bg-white border border-gray-200 text-gray-700 hover:border-[#25aae1] hover:text-[#25aae1]"
                            )}
                        >
                            <span className="text-base">{category.icon}</span>
                            {category.label}
                        </motion.button>
                    ))}
                </div>

                {/* Gradient Overlays */}
                <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none" />
            </div>
        </div>
    );
}