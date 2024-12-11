import Image from 'next/image'; // Importing Next.js Image component for optimized image loading
import bookimage from '@/public/new.png';
import { FaTruck, FaCreditCard, FaSyncAlt, FaLock } from 'react-icons/fa'; // FontAwesome Icons

export default function HeroSection({ darkMode }) {
  return (
    <div className={darkMode ? "bg-black text-white" : "bg-white text-black"}>
      {/* Author and Book Information Section */}
      <div className="px-8 py-10 space-y-2">
        {/* Author Name and Link */}
        <div className="flex items-center space-x-2 ml-8 ">
          <a href="#" className="text-blue-400 underline font-medium">
            Oscar Wilde
          </a>
          <span className="text-gray-600 ">(Author)</span>
        </div>

        {/* Book Title */}
        <h1 className="font-extrabold text-gray-900 dark:text-white ml-8 text-2xl sm:text-3xl md:text-4xl">
          The Picture of Dorian Gray
        </h1>

        {/* Book Details */}
        <h2 className="text-gray-500 dark:text-gray-300 ml-8 text-sm sm:text-base md:text-lg">
          Paperback, 1 June 1998
        </h2>
      </div>

      {/* Book Image Section */}
      <div className={`flex items-center mb-14 justify-center ${darkMode ? 'bg-black' : 'bg-white'}`}> 
        <div className="relative">
          <Image
            src={bookimage}
            alt="Book Image"
            width="290" // Specify width of the image
            height="440" // Specify height to maintain aspect ratio
            className="rounded-lg mb-14  shadow-lg transition-transform transform hover:scale-105"
          />
        </div>
      </div>

      {/* Add to Cart Button */}
      <div className="px-5">
        <button className="bg-yellow-500 text-black font-semibold py-5 w-full rounded-lg hover:bg-yellow-400 transition duration-300">
          <h1 className="ml-7 text-left text-2xl">Add to Cart</h1>
        </button>
      </div>  

      {/* Features Section with Icons */}
      <div className="max-w-7xl mx-auto py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Free Delivery Section */}
          <div className="flex flex-col items-center  overflow-hidden p-8">
            <FaTruck className="h-14 w-14  mb-2 mt-5" />
            <p className='mt-7 mb-4'>Free Delivery</p>
          </div>

          {/* Cash on Delivery Section */}
          <div className="flex flex-col items-center overflow-hidden p-8">
            <FaCreditCard className="h-14 w-14 mt-5 mb-2" />
            <p className="mt-7 mb-4">Cash on Delivery</p>
          </div>

          {/* 15 Days Free Returns Section */}
          <div className="flex flex-col items-center overflow-hidden p-8">
            <FaSyncAlt className="h-14 w-14 mt-5 mb-2" />
            <p className="mt-7 mb-4">15 Days Free Returns</p>
          </div>

          {/* Secure Checkout Section */}
          <div className="flex flex-col items-center overflow-hidden p-8">
            <FaLock className="h-14 w-14 mt-5 mb-2" />
            <p className="mt-7 mb-4">Secure Checkout</p>
          </div>
        </div>
      </div>

    
    
    </div>
  );
}
