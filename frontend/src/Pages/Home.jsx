import React, { useState } from "react";
import Header from "../Components/Header/Header";
import HeroSection from "../Components/Hero/HeroSection";
import Categories from "../Components/Category/Categories";
import Popular from "../Components/Products/Popular";
import { sampleProducts } from "../SampleData";

const Home = ({ addToCart }) => {
  //console.log(addToCart+"iam from fome")
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("Select Location");
const[selectedCategory,setSelectedCategory]=useState("All");

  const filtered = sampleProducts.filter((p) =>{
 const matchSearch=p.name.toLowerCase().includes(searchQuery.toLowerCase())
  const matchCategory=selectedCategory==="All" || p.category===selectedCategory;
 return matchSearch && matchCategory;
  }
   
  );

  return (
    <div>
     
      <HeroSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        location={location}
        setLocation={setLocation}
      />
      <Categories onCategorySelect={setSelectedCategory}/>
<Popular products={filtered} addToCart={addToCart} />
    </div>
  );
};

export default Home;
