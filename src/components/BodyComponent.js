import RestaurantCard from "./RestaurantCard";
import ShimmerComponent from "./ShimmerComponenet";
import resData from "../../data/restaurantsData";
import { useState, useEffect } from "react";

const restaurantData =
  resData?.card?.card?.gridElements?.infoWithStyle?.restaurants;

const BodyComponent = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0843007&lng=80.2704622&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    setRestaurantList(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  // Conditional Rendering
  if (restaurantList.length === 0) {
    return <ShimmerComponent />;
  }

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
