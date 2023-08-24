import React, { useState } from "react";
import LoadingSpinner from './Loader.jsx'


const GiftItem = ({
  title,
  link,
  price,
  old_price,
  second_hand_condition,
  rating,
  store_rating,
  snippet,
  thumbnail,
}) => {

  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false)
  }, 1000);

  return (
    <>
    {loading? <LoadingSpinner/> : <div className="bg-white shadow-md p-6 rounded-lg">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold">{title}</h2>
        <span className="text-gray-600 text-2xl font-bold">{price}</span>
      </div>
      <div className="mb-4 w-60 sm:w-auto " >
        <img src={thumbnail} alt={title} className="w-full h-auto" />
      </div>
      <p className="text-gray-700">{snippet}</p>
      <p className="text-gray-700">Old Price - {old_price}</p>
      <p className="text-gray-700">Condition - {second_hand_condition}</p>
      <p className="text-gray-700">Rating - {rating}/5</p>
      <p className="text-gray-700 mb-2">Store Rating - {store_rating}/5</p>
      
      <a href={`//${link}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline cursor-pointer">
        Buy Now
      </a>
    </div> }
    
    </>
  );
};

export default GiftItem;
