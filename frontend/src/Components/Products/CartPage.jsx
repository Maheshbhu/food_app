import React from 'react'
import { useNavigate } from "react-router-dom";
const CartPage = ({cart,updateQty, removeItem }) => {
    const navigate = useNavigate();
    const total=cart.reduce((s,it)=>s+(it.price*it.qty || 0),0);
    console.log(cart)

  return (
    <div>
      <div className="container" style={{padding:'26px 12px'}}>
        <h2>Your Cart</h2>
        {
            cart.length===0?(
<p className="muted">Cart is empty</p>
            ):(
<>
    <div className="cart-items">
      {
        cart.map((item)=>(
          
        
          <div className="cart-item" key={item._id}>
<img src={item.image} alt={item.name} className='cart-img' />
<div className="cart-details">
  <h4>{item.name}</h4>
  <p>₹{item.price}</p>
  <div className="cart-actions">
    <button onClick={() => updateQty(item._id, item.qty - 1)}
                      disabled={item.qty === 1}>-</button>
    <span>{item.qty}</span>
     <button onClick={() =>updateQty(item._id, item.qty + 1)}>
                      +
                    </button>
  </div>
</div>
<button
                  className="remove-btn"
                  onClick={() => removeItem(item._id)}
                >
                  Remove
                </button>
          </div>

        ))
      }    </div>
<div className="cart-summary">
   <h3>Subtotal: ₹{total}</h3>
            <p>Delivery Fee: ₹40</p>
            <h2>Total: ₹{total + 40}</h2>
            <button className="checkout-btn" onClick={()=>navigate("/checkout")}>Proceed to Checkout</button>
</div>

</>
            )
        }
      </div>
    </div>
  )
}

export default CartPage
