// ProductDetail.js
import React, { useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";
import { FaVolumeUp } from 'react-icons/fa';

// Import Product Images
import product_1 from '../Public Asset/P1.png';
import product_2 from '../Public Asset/P2.png';
import product_3 from '../Public Asset/P3.jpg';
import product_4 from '../Public Asset/P4.png';
import product_5 from '../Public Asset/P5.jpeg';
import product_6 from '../Public Asset/P6.png';
import product_7 from '../Public Asset/P7.png';
import product_8 from '../Public Asset/P8.jpg';
import product_9 from '../Public Asset/p9.png';
import product_10 from '../Public Asset/p10.jpeg';
import product_11 from '../Public Asset/p11.png';
import product_12 from '../Public Asset/p12.png';
import product_13 from '../Public Asset/p13.jpeg';
import product_14 from '../Public Asset/p14.jpg';
import product_15 from '../Public Asset/p15.jpeg';
import product_16 from '../Public Asset/p16.jpeg';
import product_17 from '../Public Asset/p17.jpg';
import product_18 from '../Public Asset/p18.png';

// Product Data (ensure this matches the FeatureProduct.js)
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

const placeholderImage = '/path/to/placeholder.jpg';


function ProductDetail({ setCartItems }) { // Receive setCartItems as a prop
    const { productId } = useParams();
    const navigate = useNavigate();
    const [imgSrc, setImgSrc] = useState({});
    const speechRef = useRef(null);
    const [isSpeaking, setIsSpeaking] = useState(false);

    const handleImageError = (id) => {
        setImgSrc((prevState) => ({
            ...prevState,
            [id]: placeholderImage,
        }));
    };

    const product = products.find((p) => p.id === parseInt(productId));

    if (!product) {
        return <div className="text-center py-10">Product not found.</div>;
    }

    const handleAddToCart = () => {
        setCartItems(prevCart => { // update the cart state in Cart.js
           const isProductInCart = prevCart.some(item => item.id === product.id);
           if(isProductInCart){
             alert(`${product.title} is already in the cart`)
            return prevCart; // return early without adding to cart if item exists
           }
            alert(`${product.title} added to cart`);
            return [...prevCart, { ...product, uniqueCode: `P${product.id}` }]; //add a unique code here for simplicity
        });
    };

  const handleShopNow = () => {
      setCartItems(prevCart => {
          const isProductInCart = prevCart.some(item => item.id === product.id);
            if(isProductInCart){
              alert(`${product.title} is already in the cart`)
              return prevCart; // return early without adding to cart if item exists
            }
            alert(`${product.title} added to cart`);
          return [...prevCart, { ...product, uniqueCode: `P${product.id}` }]; //Add to cart and redirect
      });
        navigate('/cart'); // Redirect to the cart page after adding
    };

    const handleGoBack = () => {
        navigate(-1);
    };


    const handleSpeak = () => {

        if (isSpeaking) {
            window.speechSynthesis.cancel();
            setIsSpeaking(false);
            return;
        }
        const utterance = new SpeechSynthesisUtterance(product.description);

        utterance.onstart = () => {
            setIsSpeaking(true);
        }

        utterance.onend = () => {
            setIsSpeaking(false);
        }


        window.speechSynthesis.speak(utterance);
        speechRef.current = utterance;
    };


    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <button onClick={handleGoBack} className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg mb-6 hover:bg-gray-300 transition duration-200">
                Go Back
            </button>
            <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">

                {/* Image Section */}
                <div className="md:w-1/2 p-4 flex items-center justify-center bg-gray-100">
                    <img
                        src={imgSrc[product.id] || product.image}
                        alt={product.title}
                        className="object-contain w-full h-auto max-h-96"
                        onError={() => handleImageError(product.id)}
                    />
                </div>

                {/* Details Section */}
                <div className="md:w-1/2 p-4">
                    <h2 className="text-3xl font-semibold mb-4 text-gray-900">{product.title}</h2>
                    <p className="text-gray-700 mb-2">Price: Rs. {product.price}</p>
                    <p className="text-gray-700 mb-6">{product.description}</p>
                    <div className="flex justify-between items-center mb-6">

                        <button
                            onClick={handleSpeak}
                            className={`bg-green-500 text-white py-2 px-3 rounded-lg hover:bg-blue-600 transition duration-200 flex items-center ${isSpeaking ? 'bg-red-500 hover:bg-red-600' : ''}`}
                        >
                            <FaVolumeUp className="mr-2" /> {isSpeaking ? 'Stop' : 'Listen'}
                        </button>
                        <div className="relative group">
                            <span className="text-green-500 cursor-pointer">
                                <CiHeart className="w-8 h-8" />
                            </span>
                            <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-16 bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                Add to Wishlist
                            </span>
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        <button
                            onClick={handleAddToCart}
                            className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-200">
                            Add to Cart
                        </button>
                         <button
                            onClick={handleShopNow}
                            className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition duration-200">
                            Shop Now
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ProductDetail;