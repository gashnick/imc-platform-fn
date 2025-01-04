export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  images: string[];
  rating: number;
  reviews: number;
  colors: string[];
  features: string[];
  specifications: { [key: string]: string };
  stock: number;
  type: "rent" | "buy";
}
