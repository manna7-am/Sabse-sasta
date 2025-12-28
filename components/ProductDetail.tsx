import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, CheckCircle, Shield, ShoppingBag } from 'lucide-react';
import { PRODUCTS, BUY_LINK } from '../constants';

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
        <Link to="/products" className="text-indigo-600 hover:text-indigo-800 font-medium">
          Back to Products
        </Link>
      </div>
    );
  }

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/products" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 mb-8">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Shop
        </Link>

        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-start">
          {/* Image Gallery */}
          <div className="flex flex-col-reverse">
            <div className="w-full aspect-w-1 aspect-h-1 rounded-2xl overflow-hidden bg-gray-100 shadow-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <div className="flex justify-between items-center">
               <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{product.name}</h1>
               <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                 {product.category}
               </span>
            </div>

            <div className="mt-4">
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <Star
                      key={rating}
                      className={`h-5 w-5 flex-shrink-0 ${
                        product.rating > rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="ml-3 text-sm text-gray-500">{product.reviews} customer reviews</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <p className="text-base text-gray-700 leading-relaxed">{product.description}</p>
            </div>
            
            <div className="mt-6">
               <h4 className="font-medium text-gray-900 mb-2">Key Benefits:</h4>
               <ul className="space-y-2">
                 {product.tags.map(tag => (
                   <li key={tag} className="flex items-center text-sm text-gray-600">
                     <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                     {tag}
                   </li>
                 ))}
                 <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Premium Quality
                 </li>
                 <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    7 Day Return Policy
                 </li>
               </ul>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex items-end gap-4 mb-6">
                <span className="text-4xl font-bold text-gray-900">₹{product.price}</span>
                <div className="flex flex-col">
                  <span className="text-lg text-gray-500 line-through">₹{product.originalPrice}</span>
                  <span className="text-sm font-semibold text-green-600">{discount}% OFF</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={BUY_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-indigo-600 border border-transparent rounded-xl py-4 px-8 flex items-center justify-center text-lg font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-lg shadow-indigo-200"
                >
                  <ShoppingBag className="h-5 w-5 mr-2" />
                  Buy Now
                </a>
              </div>
              
              <div className="mt-6 flex items-center justify-center text-sm text-gray-500">
                <Shield className="flex-shrink-0 mr-2 h-5 w-5 text-gray-400" />
                <span>Secure transaction | 100% Genuine Product</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};