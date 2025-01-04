"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const sortOptions = [
    { label: "Most Popular", value: "popular" },
    { label: "Newest", value: "newest" },
    { label: "Price: Low to High", value: "price_asc" },
    { label: "Price: High to Low", value: "price_desc" },
];

export function ProductFilters() {
    const [sortBy, setSortBy] = useState(sortOptions[0].value);

    return (
        <div className="flex items-center gap-4">
            <div className="relative">
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    {sortOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
        </div>
    );
}