"use client";

import { useState } from "react";


interface ProductTabsProps {
    description: string;
    features: string[];
    specifications: { [key: string]: string };
}

export function ProductTabs({ description, features, specifications }: ProductTabsProps) {
    const [activeTab, setActiveTab] = useState<'description' | 'specifications'>('description');

    return (
        <div className="mt-8 border-t border-gray-200">
            <div className="flex space-x-8 mt-4">
                <button
                    onClick={() => setActiveTab('description')}
                    className={`pb-2 ${activeTab === 'description'
                            ? 'text-blue-600 border-b-2 border-blue-600'
                            : 'text-gray-500'
                        }`}
                >
                    Description
                </button>
                <button
                    onClick={() => setActiveTab('specifications')}
                    className={`pb-2 ${activeTab === 'specifications'
                            ? 'text-blue-600 border-b-2 border-blue-600'
                            : 'text-gray-500'
                        }`}
                >
                    Specifications
                </button>
            </div>

            <div className="mt-4">
                {activeTab === 'description' ? (
                    <div>
                        <p className="text-gray-600">{description}</p>
                        <ul className="mt-4 space-y-2">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-center text-gray-600">
                                    <span className="mr-2">•</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <dl className="divide-y divide-gray-200">
                        {Object.entries(specifications).map(([key, value]) => (
                            <div key={key} className="py-3 flex justify-between">
                                <dt className="text-gray-500">{key}</dt>
                                <dd className="text-gray-900">{value}</dd>
                            </div>
                        ))}
                    </dl>
                )}
            </div>
        </div>
    );
}