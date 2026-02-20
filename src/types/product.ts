export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  images: string[];
  category: string;
  badge?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
