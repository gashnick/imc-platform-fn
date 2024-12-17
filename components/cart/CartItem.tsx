import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CartItem as CartItemType } from '@/types/cart';

interface CartItemProps {
    item: CartItemType;
    onUpdateQuantity: (id: number, quantity: number) => void;
    onDelete: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onUpdateQuantity, onDelete }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-col sm:flex-row items-start sm:items-center bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
        >
            <div className="relative group">
                <Image
                    src={item.imageUrl}
                    alt={item.name}
                    width={96}
                    height={96}
                    className="w-24 h-24 rounded-md object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            <div className="flex-1 px-4">
                <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                <p className="text-gray-600 text-sm mt-2">{item.description}</p>

                {item.stock > 0 ? (
                    <p className="text-green-600 text-sm font-medium mt-2 flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        In Stock ({item.stock} available)
                    </p>
                ) : (
                    <p className="text-red-600 text-sm font-medium mt-2">Out of Stock</p>
                )}

                <div className="flex items-center space-x-4 mt-4">
                    <div className="flex items-center space-x-2">
                        <button
                            onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                        >
                            -
                        </button>
                        <input
                            type="number"
                            min={1}
                            max={item.stock}
                            value={item.quantity}
                            onChange={(e) => onUpdateQuantity(item.id, Number(e.target.value))}
                            className="w-16 border rounded-md text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            onClick={() => onUpdateQuantity(item.id, Math.min(item.stock, item.quantity + 1))}
                            className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                        >
                            +
                        </button>
                    </div>

                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                        onClick={() => onDelete(item.id)}
                    >
                        Remove
                    </motion.button>
                </div>
            </div>

            <div className="text-right">
                <p className="text-xl font-bold text-gray-800">
                    ${(item.price * item.quantity).toFixed(2)}
                </p>
            </div>
        </motion.div>
    );
};

export default CartItem;