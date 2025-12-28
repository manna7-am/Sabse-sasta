import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { BUY_LINK } from '../constants';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="group relative bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full overflow-hidden">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-t-2xl bg-gray-200 lg:aspect-none lg:h-64 relative">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          {discount}% OFF
        </div>
      </div>
      <div className="flex-1 p-4 flex flex-col justify-between">
        <div>
           <div className="flex justify-between items-start">
             <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  <Link to={`/product/${product.id}`}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </Link>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{product.category}</p>
             </div>
           </div>
           
           <div className="flex items-center mt-2">
             <Star className="h-4 w-4 text-yellow-400 fill-current" />
             <span className="ml-1 text-sm text-gray-600">{product.rating} ({product.reviews})</span>
           </div>
           
           <p className="mt-2 text-sm text-gray-600 line-clamp-2">{product.shortDescription}</p>
        </div>
        
        <div className="mt-4">
          <div className="flex items-end gap-2 mb-3">
            <span className="text-xl font-bold text-gray-900">₹{product.price}</span>
            <span className="text-sm text-gray-500 line-through mb-1">₹{product.originalPrice}</span>
          </div>
          
          <a 
            href={BUY_LINK} 
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 w-full flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
          >
            <ShoppingCart className="h-4 w-4" />
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
};