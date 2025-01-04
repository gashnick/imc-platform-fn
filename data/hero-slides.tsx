import { ShoppingBag, Car, Gift } from 'lucide-react';
import { Slide } from '@/types/hero';

export const slides: Slide[] = [
    {
        watchImage: "/images/watches.png",
        text: "Find Best Product to Shoop Online",
        subText: "Experience the future on your wrist with our premium collection",
        bgColor: "from-blue-900 to-blue-700",
        icon: <ShoppingBag className="w-6 h-6" />,
    },
    {
        watchImage: "/images/car.jpg",
        text: "Buy & Rent Best Cars at Affordable Prices",
        subText: "Drive your dreams with our Auto  service and  spares delivery",
        bgColor: "from-blue-800 to-blue-600",
        icon: <Car className="w-6 h-6" />,
       
    },
    {
        watchImage: "/images/gifts.jpg",
        text: "Perfect Gifts for Your Loved Ones",
        subText: "Make every moment special with thoughtful presents",
        bgColor: "from-red-900 to-red-700",
        icon: <Gift className="w-6 h-6" />,
    },
];