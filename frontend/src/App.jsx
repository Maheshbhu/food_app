import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import CartPage from "./Components/Products/CartPage";
import Header from "./Components/Header/Header";
import CartSidebar from "./Components/Products/CartSiderbar";
import Profile from "./Components/Profile/Profile";
import OrderPage from "./Components/Orders/OrderPage";
import CheckoutPage from "./Components/Orders/CheckoutPage";
import Restaurant from "./Components/Restaurants/Restaurant";
import AuthPage from "./Components/Login/AuthPage";
import axiosInstance from "./api/axiosInstance";
import { Navigate } from "react-router-dom";

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const[orders,setOrders]=useState([])
  const [user, setUser] = useState(null);
  const toggleCart = () => setIsCartOpen((prev) => !prev);

   // ✅ Fetch orders only once after login or refresh
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        console.log("Token being used:", JSON.parse(localStorage.getItem("userInfo"))?.token);

        const { data } = await axiosInstance.get("/orders/myorders");
        setOrders(data.orders || data);
      } catch (err) {
        console.log("No orders yet or unauthorized:", err.message);
      }
    };

    // only fetch if user logged in
    const savedUser = localStorage.getItem("userInfo");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      fetchOrders();
    }
  }, []);


  // Add to cart
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item._id === product._id);
      if (existing) {
        return prev.map((item) =>
          item._id === product._id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  // Update quantity
  const updateQty = (id, qty) => {
    setCart((prev) =>
      prev.map((item) =>
        item._id === id ? { ...item, qty: Math.max(1, qty) } : item
      )
    );
  };

  // Remove item
  const removeItem = (id) => {

    setCart((prev) => prev.filter((item) => item._id !== id));
  };

  useEffect(()=>{
    const saveduser=localStorage.getItem("userInfo");
    if(saveduser) setUser(JSON.parse(saveduser));
  },[])

  return (
    <Router>

 
      <Header onCartClick={toggleCart} cartCount={cart.length} user={user} setUser={setUser}/>

      {/* Cart Sidebar always mounted */}
      <CartSidebar
        cart={cart}
        updateQty={updateQty}
        removeItem={removeItem}
        isCartOpen={isCartOpen}
        closeSidebar={() => setIsCartOpen(false)}
      />

      <Routes>
       <Route
    path="/auth"
    element={
      user ? <Navigate to="/" replace /> : <AuthPage setUser={setUser} />
    }
  />

       <Route path="/restaurants" element={<Restaurant></Restaurant>} />
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/profile" element={<Profile user={user} orders={orders} />} />
          <Route path="/orders" element={<OrderPage orders={orders}/>} />
          <Route path="/checkout" element={<CheckoutPage cart={cart} setOrders={setOrders} setCart={setCart}></CheckoutPage>}></Route>
        <Route
          path="/cart"
          element={
            <CartPage
              cart={cart}
              updateQty={updateQty}
              removeItem={removeItem}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
