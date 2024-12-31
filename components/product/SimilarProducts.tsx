"use client";

import { motion } from "framer-motion";
import { Product } from "@/types/product";
import { ProductCard } from "./ProductCard";

interface SimilarProductsProps {
    currentProductId: number;
    products: Product[];
}

export function SimilarProducts({ currentProductId, products }: SimilarProductsProps) {
    const similarProducts = products
        .filter((p) => p.id !== currentProductId)
        .slice(0, 8);

    return (
        <section className="py-12">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
            >
                <div className="flex items-center justify-between">
                    <div className="space-y-1">
                        <h2 className="text-2xl font-bold text-gray-900">
                            Similar Products
                        </h2>
                        <p className="text-gray-500">
                            You might also like these products
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {similarProducts.map((product) => (
                         <ProductCard key={product.id} product={product} />
                       
                    ))}
                </div>
            </motion.div>
        </section>
    );
}