import { Star } from "lucide-react";

interface ProductRatingProps {
    rating: number;
    reviews: number;
}

export function ProductRating({ rating, reviews }: ProductRatingProps) {
    return (
        <div className="flex items-center justify-between w-full">
            <div className="flex">
                {[...Array(5)].map((_, index) => (
                    <Star
                        key={index}
                        size={16}
                        className={index < Math.floor(rating) ? "text-yellow-500" : "text-gray-300"}
                    />
                ))}
            </div>
            <span className="ml-2 text-sm text-gray-600">{rating.toFixed(1)}</span>
            <span className="text-sm text-gray-500 ml-2">{reviews} reviews</span>
        </div>

    );
}