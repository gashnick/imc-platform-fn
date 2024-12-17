import React from 'react';
import { motion } from 'framer-motion';
import { CartTotals } from '@/types/cart';

interface CartSummaryProps {
    totals: CartTotals;
    onCheckout: () => void;
}

const CartSummary: React.FC<CartSummaryProps> = ({ totals, onCheckout }) => {
    const freeShippingThreshold = 100;
    const progressPercentage = (totals.subtotal / freeShippingThreshold) * 100;

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

            {/* Free Shipping Progress */}
            {totals.subtotal < freeShippingThreshold && (
                <div className="mb-6">
                    <p className="text-sm text-gray-600 mb-2">
                        Add ${(freeShippingThreshold - totals.subtotal).toFixed(2)} more for free shipping!
                    </p>
                    <div className="h-2 bg-gray-200 rounded-full">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${Math.min(progressPercentage, 100)}%` }}
                            className="h-full bg-blue-500 rounded-full"
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                </div>
            )}

            {/* Summary Items */}
            <div className="space-y-3">
                <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>${totals.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span>{totals.shipping === 0 ? 'Free' : `$${totals.shipping.toFixed(2)}`}</span>
                </div>
                {totals.discount > 0 && (
                    <div className="flex justify-between text-green-600">
                        <span>Discount</span>
                        <span>-${totals.discount.toFixed(2)}</span>
                    </div>
                )}
                <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span>${totals.tax.toFixed(2)}</span>
                </div>
                <div className="border-t pt-3 mt-3">
                    <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold">Total</span>
                        <span className="text-xl font-bold">${totals.total.toFixed(2)}</span>
                    </div>
                </div>
            </div>

            {/* Checkout Button */}
            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                onClick={onCheckout}
            >
                Proceed to Checkout
            </motion.button>
        </div>
    );
};

export default CartSummary;