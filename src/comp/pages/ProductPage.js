import React, { useState } from 'react';
import { CiHeart } from "react-icons/ci";
import { FaSeedling, FaCarrot, FaSprayCan, FaUsersCog, FaTools, FaWater } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Import Product Images
import product_1 from '../Public Asset/P1.png';
import product_2 from '../Public Asset/P2.png';
import product_3 from '../Public Asset/P3.jpg';
import product_4 from '../Public Asset/P4.png';
import product_5 from '../Public Asset/P5.jpeg';
import product_6 from '../Public Asset/P6.png';
import product_7 from '../Public Asset/P7.png';
import product_8 from '../Public Asset/P8.jpg';
import product_9 from '../Public Asset/P1.png';
import product_10 from '../Public Asset/P2.png';
import product_11 from '../Public Asset/P3.jpg';
import product_12 from '../Public Asset/P4.png';
import product_13 from '../Public Asset/P5.jpeg';
import product_14 from '../Public Asset/P8.jpg';
import product_15 from '../Public Asset/P6.png';
import product_16 from '../Public Asset/P7.png';
import product_17 from '../Public Asset/P8.jpg';
import product_18 from '../Public Asset/P1.png';

// Product Data
const products = [
 {
     id: 1,
     image: product_1,
     title: 'SarSabaz Urea',
     description: 'Fatima Fertilizer Urea is a white, odorless, crystalline substance...',
     category: 'Fertilizer',
     price: 5000,
 },
 {
     id: 2,
     image: product_2,
     title: 'D A P',
     description: 'SarSabaz Urea is a white, odorless, crystalline substance...',
     category: 'Fertilizer',
     price: 4000,
 },
 {
     id: 3,
     image: product_3,
     title: 'Tomato Seed Gold ',
     description: 'An early, prolific, golden cherry tomato. 15-20 gm., round to slightly oval cherry tomatoes have a deep yellow color. The flavor is well-balanced and delicious, and a majority of the early fruits are seedless.',
     category: 'Seed',
     price: 200,
 },
 {
     id: 4,
     image: product_4,
     title: 'Baby Corn Seed',
     description: 'A sweet and tender baby corn variety, perfect for snacking and salads. Its sweet flavor and crunchy texture make it a great choice for grilling or boiling. 50-60 days to harvest.',
     category: 'Seed',
     price: 150,
 },
 {
     id: 5,
     image: product_5,
     title: 'Red Tomato Seed',
     description: 'A delicious red tomato variety, perfect for slicing and salads. Its sweet-tart flavor and firm texture make it a great choice for snacking and cooking. Indeterminate variety, needs staking. 70-80 days to harvest.',
     category: 'Seed',
     price: 180,
 },
 {
     id: 6,
     image: product_6,
     title: 'Tomato Seed',
     description: 'ig yellow-white fruits with mild flavor. There are a number of heirloom “white” tomatoes, and Great White is the best. we have seen. The fruit is meaty with few seeds, a mild non-acid flavor, and creamy texture. ',
     category: 'Seed',
     price: 250,
 }
 ,
 {
     id: 7,
     image: product_7,
     title: 'Apple Gourd (Tinda)',
     description: 'Apple Gourd (Tinda) Selected Seeds approximately 40 seeds',
     category: 'Seed',
     price: 120,
 },
 {
     id: 8,
     image: product_8,
     title: 'Okra Seed Red Burgundy',
     description: 'It is a strong vigorous hybrid with a moderate side shoot development and narrow leaf type. It has a very easy setting ability, ',
     category: 'Seed',
     price: 100,
 },
 {
     id: 9,
     image: product_9,
     title: 'Rice Crop',
     description: 'High-yielding rice variety known for its long grains and excellent cooking quality.',
     category: 'Crop',
     price: 8000,
 },
 {
     id: 10,
     image: product_10,
     title: 'Wheat Crop',
     description: 'A popular wheat variety with high protein content and good milling quality.',
     category: 'Crop',
     price: 7500,
 },
 {
     id: 11,
     image: product_11,
     title: 'Roundup Herbicide',
     description: 'A powerful herbicide for controlling a wide range of weeds.',
     category: 'Pesticide',
     price: 3000,
 },
 {
     id: 12,
     image: product_12,
     title: 'Insecticide Spray',
     description: 'Effective insecticide for controlling common garden pests and insects.',
     category: 'Pesticide',
     price: 2800,
 },
 {
     id: 13,
     image: product_13,
     title: 'Hand Trowel',
     description: 'Durable hand trowel with a comfortable grip for planting and transplanting.',
     category: 'Tools',
     price: 500,
 },
 {
     id: 14,
     image: product_14,
     title: 'Garden Fork',
     description: 'Sturdy garden fork for turning over soil and preparing beds.',
     category: 'Tools',
     price: 700,
 },
 {
     id: 15,
     image: product_15,
     title: 'Drip Irrigation Kit',
     description: 'Efficient drip irrigation kit for watering plants with minimal wastage.',
     category: 'Irrigation',
     price: 4500,
 },
 {
     id: 16,
     image: product_16,
     title: 'Sprinkler System',
     description: 'Easy-to-use sprinkler system for even watering of lawns and gardens.',
     category: 'Irrigation',
     price: 6000,
 },
 {
     id: 17,
     image: product_17,
     title: 'Pesticide Kit',
     description: 'A comprehensive set of pesticides for complete protection of crops.',
     category: 'Pesticide',
     price: 5500,
 },
 {
     id: 18,
     image: product_18,
     title: 'Organic Fertilizer Kit',
     description: 'A complete kit for those who prefer organic means of fertilizing the crops.',
     category: 'Fertilizer',
     price: 6200,
 },
 // Add more products here
];

const categories = [
 { name: 'Crop', icon: <FaSeedling className="text-4xl mb-2" /> },
 { name: 'Seed', icon: <FaCarrot className="text-4xl mb-2" /> },
 { name: 'Pesticide', icon: <FaSprayCan className="text-4xl mb-2" /> },
 { name: 'Fertilizer', icon: <FaUsersCog className="text-4xl mb-2" /> },
 { name: 'Tools', icon: <FaTools className="text-4xl mb-2" /> },
 { name: 'Irrigation', icon: <FaWater className="text-4xl mb-2" /> },
];
const placeholderImage = '/path/to/placeholder.jpg';

function FeatureProduct() {
 const [selectedCategory, setSelectedCategory] = useState('Crop');
 // Create a state object that stores image URLs for each product
 const [imgSrc, setImgSrc] = useState(
     products.reduce((acc, product) => {
         acc[product.id] = product.image; // Initialize with product image URL
         return acc;
     }, {})
 );

 const handleImageError = (id) => {
     setImgSrc((prevState) => ({
         ...prevState,
         [id]: placeholderImage, // Set placeholder image for the specific product
     }));
 };

 const filteredProducts = selectedCategory === 'All' ? products : products.filter(product => product.category === selectedCategory);

 return (
     <div className="max-w-7xl mx-auto px-4 py-8">
         <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-800">Featured Products</h2>

         {/* Category Navigation */}
         <div className="flex justify-center space-x-4 mb-6">
             <button
                 onClick={() => setSelectedCategory('All')}
                 className={`py-2 px-4 rounded-lg  font-medium transition duration-200 ${selectedCategory === 'All' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>
                 All
             </button>
             {categories.map(cat => (
                 <button
                     key={cat.name}
                     onClick={() => setSelectedCategory(cat.name)}
                     className={`flex flex-col items-center py-2 px-4 rounded-lg font-medium transition duration-200 ${selectedCategory === cat.name ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>
                     <div className="mb-1">{cat.icon}</div>
                     {cat.name}
                 </button>
             ))}
         </div>


         {/* Product Grid */}
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
             {filteredProducts.map((product) => (
                 <div
                     key={product.id}
                     className="m-2 max-w-sm mx-auto border border-gray-300 rounded-lg overflow-hidden shadow-md transition-shadow duration-300 hover:shadow-xl transform hover:scale-105"
                 >
                     <div className="flex items-center justify-center h-48 bg-gray-100">
                         <img
                             src={imgSrc[product.id]}
                             alt={product.title}
                             height={200}
                             width={200}
                             className="object-contain"
                             onError={() => handleImageError(product.id)} // Handle image error
                         />
                     </div>
                     <div className="p-4 bg-white flex flex-col justify-between" style={{ minHeight: '230px' }}>
                         <div>
                             <h3 className="text-xl font-semibold mb-2 text-gray-900 overflow-hidden text-ellipsis whitespace-nowrap" style={{ maxHeight: '2.5rem' }}>
                                 {product.title}
                             </h3>
                               <p className="text-gray-700 mb-1">Price: Rs. {product.price}</p>
                             <p className="text-gray-700 mb-4 overflow-hidden text-ellipsis" style={{ maxHeight: '4.5rem', overflow: 'hidden' }}>
                                 {product.description}
                             </p>
                         </div>
                         <div className="flex justify-between items-center mt-auto">
                             <Link to={`/product/${product.id}`}
                                 className="bg-green-500 text-white py-2 px-3 rounded-lg hover:bg-green-600 transition duration-200"
                             >
                                  Shop Now
                             </Link>

                             <button className="bg-gray-200 text-gray-700 py-2 px-3 rounded-lg hover:bg-gray-300 transition duration-200">Add to Cart</button>
                             <div className="relative group">
                                 <span className="text-green-500 cursor-pointer">
                                     <CiHeart className="w-8 h-8" />
                                 </span>
                                 <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-16 bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                     Add to Wishlist
                                 </span>
                             </div>
                         </div>
                     </div>
                 </div>
             ))}
         </div>
     </div>
 );
}

export default FeatureProduct;