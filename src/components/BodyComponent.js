import RestaurantCard from "./RestaurantCard";
import resData from "../../data/restaurantsData";
import { useState } from "react";

const restaurantData = resData.card.card.gridElements.infoWithStyle.restaurants;

const BodyComponent = () => {
  const [restaurantList, setRestaurantList] = useState(restaurantData);
  return (
    <div className="body">
      <button
        className="filter-top-rating"
        onClick={() => {
          const filteredData = restaurantList.filter(
            (res) => res.info.avgRating > 4.4
          );
          setRestaurantList(filteredData);
        }}
      >
        Top Rated
      </button>
      <div className="restaurant-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} data={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
