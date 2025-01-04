// Types for the cart system
export interface CartItem {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  imageUrl: string;
  stock: number;
  variants?: {
    size?: string;
    color?: string;
  };
}

export interface RecentlyViewedItem {
  id: number;
  name: string;
  stock: number;
  imageUrl: string;
  price: number;
}

export interface CartTotals {
  subtotal: number;
  shipping: number;
  tax: number;
  discount: number;
  total: number;
}
