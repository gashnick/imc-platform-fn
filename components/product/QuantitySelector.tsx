"use client";

import { Plus, Minus } from "lucide-react";

interface QuantitySelectorProps {
    quantity: number;
    onQuantityChange: (quantity: number) => void;
}

export function QuantitySelector({ quantity, onQuantityChange }: QuantitySelectorProps) {
    return (
        <div>
            <h3 className="text-sm font-medium mb-2">Quantity</h3>
            <div className="flex items-center space-x-4">
                <button
                    onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
                    className="p-2 border rounded-md hover:bg-gray-50"
                >
                    <Minus className="w-4 h-4" />
                </button>
                <span className="text-lg font-medium w-8 text-center">{quantity}</span>
                <button
                    onClick={() => onQuantityChange(quantity + 1)}
                    className="p-2 border rounded-md hover:bg-gray-50"
                >
                    <Plus className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}