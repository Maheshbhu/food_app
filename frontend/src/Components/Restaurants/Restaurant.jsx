import React from 'react'
import "./Restaurant.css"
const restaurants = [
  {
    id: 1,
    name: "The Spice Villa",
    cuisine: "Indian, Chinese",
    rating: 4.5,
    deliveryTime: "30 mins",
    image: "https://content.jdmagicbox.com/comp/katihar/t9/9999p6452.6452.231114114353.i1t9/catalogue/spice-villa-katihar-indian-restaurants-ljeeqzrdoi.jpg",
  },
  {
    id: 2,
    name: "Pizza Planet",
    cuisine: "Italian, Fast Food",
    rating: 4.2,
    deliveryTime: "25 mins",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQRrEN1lyak3Bt8TZsvReyoTrtAvx4Yf3kSg&s",
  },
  {
    id: 3,
    name: "Healthy Bites",
    cuisine: "Salads, Juices, Continental",
    rating: 4.6,
    deliveryTime: "20 mins",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOUeB_ficCVtD38Nsgv3tDYnSs-w6uuG69HA&s",
  },
  {
    id: 4,
    name: "Burger House",
    cuisine: "Fast Food, Beverages",
    rating: 4.0,
    deliveryTime: "22 mins",
    image: "https://content.jdmagicbox.com/comp/saharsa/d4/9999p6478.6478.240117160053.d1d4/catalogue/xxj2qsj0d591qew-sdin3xf82f.jpg",
  },
];
const Restaurant = () => {
  return (
    <div>
       <div className="restaurant-page">
      <h2>Restaurants Near You 🍴</h2>

      <div className="restaurant-grid">
        {restaurants.map((rest) => (
          <div key={rest.id} className="restaurant-card">
            <img src={rest.image} alt={rest.name} />
            <div className="restaurant-info">
              <h3>{rest.name}</h3>
              <p className="cuisine">{rest.cuisine}</p>
              <div className="restaurant-meta">
                <span>⭐ {rest.rating}</span>
                <span>{rest.deliveryTime}</span>
              </div>
              <button
                className="view-menu-btn"
                onClick={() => alert(`View menu for ${rest.name}`)}
              >
                View Menu
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Restaurant
