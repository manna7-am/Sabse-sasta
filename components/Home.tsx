import React from 'react';
import { Hero } from './Hero';
import { ProductCard } from './ProductCard';
import { PRODUCTS, TESTIMONIALS } from '../constants';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

export const Home: React.FC = () => {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div>
      <Hero />
      
      {/* Featured Products Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">Trending Now</h2>
              <p className="mt-2 text-gray-500">Most popular products this week.</p>
            </div>
            <Link to="/products" className="hidden sm:flex items-center text-indigo-600 font-medium hover:text-indigo-800">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-10 sm:hidden text-center">
            <Link to="/products" className="inline-flex items-center text-indigo-600 font-medium">
               View All Products <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="bg-indigo-900 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Limited Time Offer!</h2>
          <p className="text-indigo-200 text-lg mb-8 max-w-2xl mx-auto">
            Get up to 50% OFF on select electronic accessories. Jaldi kijiye, offer limited stock par valid hai.
          </p>
          <Link
            to="/products"
            className="inline-block bg-white text-indigo-900 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition-colors"
          >
            Shop Sale
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Happy Customers</h2>
            <p className="mt-2 text-gray-500">Log kya keh rahe hain humare baare mein.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                 <div className="flex items-center mb-4">
                   {[...Array(5)].map((_, i) => (
                     <Star
                        key={i}
                        className={`h-4 w-4 ${i < t.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                   ))}
                 </div>
                 <p className="text-gray-600 mb-6 italic">"{t.comment}"</p>
                 <div className="flex items-center">
                   <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold">
                     {t.name.charAt(0)}
                   </div>
                   <div className="ml-3">
                     <p className="text-sm font-medium text-gray-900">{t.name}</p>
                     <p className="text-xs text-gray-500">Verified Buyer</p>
                   </div>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};