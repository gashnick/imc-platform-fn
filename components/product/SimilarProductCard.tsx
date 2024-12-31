"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Product } from "@/types/product";
import { ProductRating } from "./ProductRating";
import { Sparkles } from "lucide-react";

interface SimilarProductCardProps {
    product: Product;
    index: number;
}

export function SimilarProductCard({ product, index }: SimilarProductCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            whileHover={{ y: -8 }}
            className="group"
        >
            <Link href={`/product/${product.id}`}>
                <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="relative aspect-square">
                        {/* Type Badge */}
                        <div className="absolute top-3 left-0 z-10">
                            <div className={`py-1 px-3 text-xs font-medium text-white rounded-r-full
                ${product.type === 'rent'
                                    ? 'bg-gradient-to-r from-[#25aae1] to-[#1e90ff]'
                                    : 'bg-gradient-to-r from-[#1E3A5F] to-[#2c5282]'
                                } flex items-center gap-1`}>
                                <Sparkles className="w-3 h-3" />
                                {product.type === 'rent' ? 'For Rent' : 'For Sale'}
                            </div>
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <Image
                            src={product.images[0]}
                            alt={product.name}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                            className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                            loading="lazy"
                        />
                    </div>

                    <div className="p-4">
                        <h3 className="text-lg font-medium text-gray-900 group-hover:text-[#25aae1] transition-colors duration-300 line-clamp-1">
                            {product.name}
                        </h3>

                        <div className="mt-3 flex items-center justify-between">
                            <div className="space-y-1">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-lg font-bold bg-gradient-to-r from-[#1E3A5F] to-[#25aae1] bg-clip-text text-transparent">
                                        {product.price}
                                    </span>
                                    {product.originalPrice && (
                                        <span className="text-sm text-gray-400 line-through">
                                            {product.originalPrice}
                                        </span>
                                    )}
                                </div>
                                <ProductRating rating={product.rating} reviews={product.reviews} />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}