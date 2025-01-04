"use client";

import Image from "next/image";
import { useState } from "react";

interface ImageGalleryProps {
    images: string[];
    productName: string;
}

export function ImageGallery({ images, productName }: ImageGalleryProps) {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
        <div className="space-y-4">
            <div className="relative aspect-square bg-gray-50 rounded-lg overflow-hidden">
                <Image
                    src={selectedImage}
                    alt={productName}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain"
                    priority
                />
            </div>
            <div className="grid grid-cols-4 gap-2">
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedImage(image)}
                        className={`relative aspect-square rounded-md overflow-hidden ${selectedImage === image
                            ? "ring-2 ring-[#25aae1]"
                                : "ring-1 ring-gray-200"
                            }`}
                    >
                        <Image
                            src={image}
                            alt={`View ${index + 1}`}
                            fill
                            sizes="(max-width: 768px) 25vw, 10vw"
                            className="object-cover"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}