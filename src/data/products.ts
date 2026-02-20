import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";
import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    name: "Leather Crossbody Bag",
    description: "Hand-stitched full-grain leather crossbody bag with brass hardware. Fits essentials perfectly for everyday carry.",
    price: 128,
    originalPrice: 168,
    rating: 4.8,
    reviewCount: 124,
    images: [product1],
    category: "Bags",
    badge: "Sale",
  },
  {
    id: "2",
    name: "Canvas Low-Top Sneakers",
    description: "Organic cotton canvas sneakers with vulcanized rubber sole. Timeless design meets sustainable materials.",
    price: 85,
    rating: 4.6,
    reviewCount: 89,
    images: [product2],
    category: "Footwear",
  },
  {
    id: "3",
    name: "Ceramic Pour-Over Set",
    description: "Handmade ceramic pour-over dripper with borosilicate glass carafe. Brew coffee with intention.",
    price: 62,
    rating: 4.9,
    reviewCount: 201,
    images: [product3],
    category: "Home",
    badge: "Best Seller",
  },
  {
    id: "4",
    name: "Merino Wool Beanie",
    description: "Chunky ribbed beanie knitted from 100% merino wool. Naturally temperature-regulating and incredibly soft.",
    price: 45,
    originalPrice: 58,
    rating: 4.7,
    reviewCount: 67,
    images: [product4],
    category: "Accessories",
    badge: "Sale",
  },
  {
    id: "5",
    name: "Minimal Analog Watch",
    description: "Rose-gold case with genuine leather strap. Japanese quartz movement. Water-resistant to 30m.",
    price: 195,
    rating: 4.5,
    reviewCount: 43,
    images: [product5],
    category: "Accessories",
  },
  {
    id: "6",
    name: "Linen Market Tote",
    description: "Oversized linen tote in sage. Reinforced handles and interior pocket. Perfect for farmers markets.",
    price: 38,
    rating: 4.4,
    reviewCount: 156,
    images: [product6],
    category: "Bags",
  },
];
