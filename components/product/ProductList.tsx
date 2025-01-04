"use client";

import { useState } from "react";
import { products } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { Pagination } from "./Pagination";

const ITEMS_PER_PAGE = 8;

export function ProductList() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentProducts = products.slice(startIndex, endIndex);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        // Scroll to top of product list
        document.getElementById("product")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div id="product" className="bg-gray-50 py-12 px-0">
            <div className="container mx-auto px-4">
                <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-0">
                        Popular Products
                    </h2>
                  
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {currentProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                <div className=" mt-8  flex justify-end ">
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </div>
    );
}