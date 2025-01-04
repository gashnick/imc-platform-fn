import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CartItem } from "@/types/cart";

interface RecommendedProductsProps {
  products: CartItem[];
  onAddToCart: (product: CartItem) => void;
}

const RecommendedProducts: React.FC<RecommendedProductsProps> = ({
  products,
  onAddToCart,
}) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">You Might Also Like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
        {products.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-lg shadow-md p-4"
          >
            <div className="relative group">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={150}
                height={150}
                className="w-full h-32 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
              />
              {product.stock < 5 && (
                <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  Only {product.stock} left
                </span>
              )}
            </div>

            <h3 className="mt-2 text-sm font-semibold">{product.name}</h3>
            <p className="text-gray-600 text-sm">${product.price.toFixed(2)}</p>

            <motion.button
              whileTap={{ scale: 0.95 }}
              className="mt-2 w-full px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors"
              onClick={() => onAddToCart(product)}
            >
              Add to Cart
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedProducts;
