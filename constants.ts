import { Product } from './types';

export const SHOP_NAME = "MYMT Shop";
export const BUY_LINK = "https://faym.co/i/mymtshop";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Earbuds",
    price: 999,
    originalPrice: 2499,
    image: "https://picsum.photos/id/1/800/800",
    shortDescription: "Crystal clear sound with deep bass.",
    description: "Experience music like never before with our Premium Wireless Earbuds. Features active noise cancellation, 30-hour battery life, and sweat resistance. Perfect for gym and travel.",
    category: "Electronics",
    rating: 4.5,
    reviews: 128,
    tags: ["Best Seller", "Wireless"]
  },
  {
    id: 2,
    name: "Classic Denim Jacket",
    price: 1499,
    originalPrice: 2999,
    image: "https://picsum.photos/id/338/800/800",
    shortDescription: "Stylish and durable denim for all seasons.",
    description: "Upgrade your wardrobe with this Classic Denim Jacket. Made from high-quality cotton blend, it fits perfectly and adds a rugged charm to your outfit. Available in all sizes.",
    category: "Fashion",
    rating: 4.8,
    reviews: 85,
    tags: ["Fashion", "Trending"]
  },
  {
    id: 3,
    name: "Smart Fitness Watch",
    price: 1999,
    originalPrice: 4999,
    image: "https://picsum.photos/id/180/800/800",
    shortDescription: "Track your health and workouts effortlessly.",
    description: "Stay on top of your fitness goals with the Smart Fitness Watch. Monitors heart rate, steps, sleep, and SpO2. Water-resistant and compatible with both Android and iOS.",
    category: "Electronics",
    rating: 4.2,
    reviews: 210,
    tags: ["Smart Tech", "Health"]
  },
  {
    id: 4,
    name: "Leather Messenger Bag",
    price: 2499,
    originalPrice: 5000,
    image: "https://picsum.photos/id/250/800/800",
    shortDescription: "Professional look for office and travel.",
    description: "Handcrafted from genuine leather, this Messenger Bag is spacious enough for your laptop and documents. Features multiple compartments and an adjustable strap.",
    category: "Accessories",
    rating: 4.7,
    reviews: 45,
    tags: ["Premium", "Office"]
  },
  {
    id: 5,
    name: "Wireless Gaming Mouse",
    price: 799,
    originalPrice: 1599,
    image: "https://picsum.photos/id/96/800/800",
    shortDescription: "High precision RGB gaming mouse.",
    description: "Dominate the game with our Wireless Gaming Mouse. Adjustable DPI, RGB lighting, and ergonomic design ensure you play comfortably for hours.",
    category: "Electronics",
    rating: 4.6,
    reviews: 320,
    tags: ["Gaming", "RGB"]
  },
  {
    id: 6,
    name: "Casual Sneakers",
    price: 1299,
    originalPrice: 2599,
    image: "https://picsum.photos/id/103/800/800",
    shortDescription: "Comfortable everyday wear sneakers.",
    description: "Walk with confidence and comfort. These Casual Sneakers feature a memory foam insole and breathable mesh upper. Perfect for daily use.",
    category: "Fashion",
    rating: 4.3,
    reviews: 150,
    tags: ["Comfort", "Daily Wear"]
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Rahul Sharma",
    comment: "Bohot badhiya products hain! Delivery bhi fast thi. Highly recommended.",
    rating: 5
  },
  {
    id: 2,
    name: "Priya Singh",
    comment: "Quality is amazing for the price. MYMT Shop is now my go-to for gadgets.",
    rating: 5
  },
  {
    id: 3,
    name: "Amit Patel",
    comment: "Sahi rate mein acchi cheez mili. Customer support bhi helpful hai.",
    rating: 4
  }
];
