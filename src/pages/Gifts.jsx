import React, { useEffect } from "react";
import GiftItem from "../components/GiftItem";
import { useDataContext } from "../DataContext";
import { useNavigate } from "react-router-dom";

function Gifts() {
  let Navigate = useNavigate();
  const { responseData, setResponseData } = useDataContext();

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = ""; // This text will be displayed in the browser's confirmation dialog
      // Perform necessary actions or set flags in localStorage here.
      localStorage.setItem("refreshing", "true");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    const isRefreshing = localStorage.getItem("refreshing") === "true";

    if (isRefreshing) {
      // Perform the action you want to trigger after refresh.
      Navigate("/");

      // Clear the localStorage flag.
      localStorage.removeItem("refreshing");
    }

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <>
    <div className="mb-10 p-5">
      <h1 className="text-center text-3xl sm:text-2xl">Gift Recomendations</h1>
    </div>
    <div className="flex gap-5 flex-wrap mx-36 lg:m-10 sm:m-2 sm:flex-col">
      {responseData.map((element) => {
        return (
          <GiftItem
            title={element.title ? element.title : ""}
            price={element.price ? element.price : ""}
            link={element.link ? element.link : ""}
            snippet={element.snippet ? element.snippet : ""}
            thumbnail={element.thumbnail ? element.thumbnail : ""}            
            old_price={element.old_price ? element.old_price : ""}            
            second_hand_condition={element.second_hand_condition ? element.second_hand_condition : ""}            
            rating={element.rating ? element.rating : ""}            
            store_rating={element.store_rating ? element.store_rating : ""}            
          />
        );
      })}
    </div>
    </>
  );
}

export default Gifts;
