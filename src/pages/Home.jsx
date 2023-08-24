import React, { useState } from "react";
import { useDataContext } from "../DataContext";
import { useNavigate } from "react-router-dom";

function Home() {
  let Navigate = useNavigate();
  const { responseData, setResponseData } = useDataContext();
  
  
  const [relationship, setRelationship] = useState("");
  const [age, setAge] = useState("");
  const [occasion, setOccasion] = useState("");
  const [interests, setInterests] = useState("");
  const [budget, setBudget] = useState("");

  async function getGifts() {
    //Submits form data to api, gets back response data from api

    //demo data
    setResponseData([
      {
        title: "Product name",
        price: "10$",
        link: "www.google.com",
        thumbnail: "https://images.pexels.com/photos/3373740/pexels-photo-3373740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        snippet: "Product snippet",
        old_price: "12$",
        second_hand_condition: 'New',
        rating: "4.5",
        store_rating: '4.8',
      },
      {
        title: "Product name",
        price: "10$",
        link: "www.google.com",
        thumbnail: "https://images.pexels.com/photos/3373740/pexels-photo-3373740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        snippet: "Product snippet",
        old_price: "12$",
        second_hand_condition: 'New',
        rating: "4.5",
        store_rating: '4.8',
      },
      {
        title: "Product name",
        price: "10$",
        link: "www.google.com",
        thumbnail: "https://images.pexels.com/photos/3373740/pexels-photo-3373740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        snippet: "Product snippet",
        old_price: "12$",
        second_hand_condition: 'New',
        rating: "4.5",
        store_rating: '4.8',
      },
      {
        title: "Product name",
        price: "10$",
        link: "www.google.com",
        thumbnail: "https://images.pexels.com/photos/3373740/pexels-photo-3373740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        snippet: "Product snippet",
        old_price: "12$",
        second_hand_condition: 'New',
        rating: "4.5",
        store_rating: '4.8',
      },
      {
        title: "Product name",
        price: "10$",
        link: "www.google.com",
        thumbnail: "https://images.pexels.com/photos/3373740/pexels-photo-3373740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        snippet: "Product snippet",
        old_price: "12$",
        second_hand_condition: 'New',
        rating: "4.5",
        store_rating: '4.8',
      },
      {
        title: "Product name",
        price: "10$",
        link: "www.google.com",
        thumbnail: "https://images.pexels.com/photos/3373740/pexels-photo-3373740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        snippet: "Product snippet",
        old_price: "12$",
        second_hand_condition: 'New',
        rating: "4.5",
        store_rating: '4.8',
      },
      {
        title: "Product name",
        price: "10$",
        link: "www.google.com",
        thumbnail: "https://images.pexels.com/photos/3373740/pexels-photo-3373740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        snippet: "Product snippet",
        old_price: "12$",
        second_hand_condition: 'New',
        rating: "4.5",
        store_rating: '4.8',
      },
      
    ]);


    //pushes client to the result page
    Navigate("/gifts")
    
  }

  return (
    <div className="flex justify-center align-top w-full h-auto dark:bg-black">
      <div className="flex flex-col justify-center w-2/5 md:w-4/5 ">
        <h1 className="text-center text-4xl p-6 font-semibold">Gift Genius AI</h1>
        <p className="font-light text-center">GiftGenius transforms the way you approach gift-giving, making it an enjoyable and thoughtful experience. With its AI-powered recommendations, you'll never have to worry about finding the perfect gift again. Surprise your loved ones with gifts that truly resonate, courtesy of GiftGenius.</p>
        <p className="text-center p-6">Get started now!</p>
        <div className="flex flex-col align-middle justify-center">
          <form className="space-y-4" onSubmit={getGifts}>
            <div>
              <label
                htmlFor="relationship"
                className="block text-sm font-medium text-gray-700">
                Relationship
              </label>
              <input
                type="text"
                id="relationship"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={relationship}
                onChange={(e) => setRelationship(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="age"
                className="block text-sm font-medium text-gray-700">
                Age
              </label>
              <input
                type="number"
                id="age"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="occasion"
                className="block text-sm font-medium text-gray-700">
                Occasion
              </label>
              <input
                type="text"
                id="occasion"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="interests"
                className="block text-sm font-medium text-gray-700">
                Interests
              </label>
              <input
                type="text"
                id="interests"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={interests}
                onChange={(e) => setInterests(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="budget"
                className="block text-sm font-medium text-gray-700">
                Budget
              </label>
              <input
                type="number"
                id="budget"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                required
              />
            </div>

            <div className="flex justify-center p-4">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Find Gifts
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

  );
}

export default Home;
