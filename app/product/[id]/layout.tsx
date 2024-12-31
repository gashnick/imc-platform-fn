"use client";

import React from "react";
import Header from "@/components/Header"; // Replace with your correct path
import Footer from "@/components/footer/Footer"; // Replace with your correct path

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <Header />

            {/* Main Content with padding to prevent collision */}
            <main className="flex-1 container mx-auto  mt-16">
                {children}
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}
