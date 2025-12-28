import React from 'react';
import { ShoppingBag, Heart, Users } from 'lucide-react';
import { SHOP_NAME } from '../constants';

export const About: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">About {SHOP_NAME}</h1>
          <p className="text-lg text-gray-600">
            Simplifying online shopping for every Indian. Humara mission hai quality products provide karna, sahi daam par.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div className="text-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-indigo-600 mx-auto mb-6">
              <ShoppingBag className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Our Story</h3>
            <p className="text-gray-500">
              Started in 2024, {SHOP_NAME} was built with a simple idea: to make modern lifestyle products accessible to everyone in India. From small beginnings to a growing community.
            </p>
          </div>

          <div className="text-center">
             <div className="flex items-center justify-center h-16 w-16 rounded-full bg-red-100 text-red-600 mx-auto mb-6">
              <Heart className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Our Values</h3>
            <p className="text-gray-500">
              Customer satisfaction is our priority. We believe in transparency, quality assurance, and building long-term trust with our customers.
            </p>
          </div>

          <div className="text-center">
             <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600 mx-auto mb-6">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Community</h3>
            <p className="text-gray-500">
              We are more than just a shop; we are a community of trendsetters. Join thousands of happy customers who trust us for their daily needs.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Join Our Journey</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Stay updated with the latest arrivals and exclusive offers. Follow us on social media and be a part of the family.
          </p>
          <div className="flex justify-center gap-4">
             {/* Social placeholders */}
             <button className="px-6 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium">Instagram</button>
             <button className="px-6 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium">Facebook</button>
          </div>
        </div>
      </div>
    </div>
  );
};