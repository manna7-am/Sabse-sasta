import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Truck, CreditCard } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="text-center lg:text-left lg:flex lg:items-center lg:gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Sabse Sasta,</span>{' '}
              <span className="block text-indigo-600 xl:inline">Sabse Accha!</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl lg:mx-0">
              Discover the latest trends in fashion and electronics. 
              Behtareen quality products directly aapke ghar tak.
              Shop smart, shop stylish with MYMT Shop.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start gap-3">
              <div className="rounded-md shadow">
                <Link
                  to="/products"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  Shop Now
                </Link>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Link
                  to="/about"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:w-1/2">
             <img
                className="w-full rounded-lg shadow-xl"
                src="https://picsum.photos/seed/fashion/800/600"
                alt="Shopping Lifestyle"
              />
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              <Truck className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Fast Delivery</h3>
            <p className="mt-2 text-base text-gray-500 text-center">
              Rapid shipping across India.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Secure Payment</h3>
            <p className="mt-2 text-base text-gray-500 text-center">
              100% safe and secure checkout.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              <CreditCard className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Best Prices</h3>
            <p className="mt-2 text-base text-gray-500 text-center">
              Unbeatable deals everyday.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};