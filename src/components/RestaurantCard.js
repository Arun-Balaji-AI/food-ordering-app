const RestaurantCard = (props) => {
  const { data } = props;
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-img"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/" +
          data.cloudinaryImageId
        }
      />
      <h3>{data.name}</h3>
      <h4>{data.cuisines.join(", ")}</h4>
      <h4>
        {data.locality}, {data.areaName}
      </h4>
      <h4>Delivery Time - {data.sla.slaString}</h4>
      <h4>{data.avgRating} Stars</h4>
    </div>
  );
};

export default RestaurantCard;
