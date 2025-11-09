const Order=require("../Models/orderModel")
//create orders
const createOrders=async(req,res)=>{
    try {
        const{items,total,address,paymentMethod,transactionId}=req.body;
        if(!items || items.length===0){
            return res.status(400).json({ message: "No order items found" });
        }

        const order=new Order({
            user:req.user._id,
            items,
            total,
            address,
            paymentMethod: paymentMethod || "COD",
            paymentStatus: paymentMethod === "Online" ? "Paid" : "Pending",
            transactionId: transactionId || null,

        });
         const createdOrder = await order.save();
    res.status(201).json({
      success: true,
      message: "Order placed successfully!",
      order: createdOrder,
    });
    } catch (error) {
         console.error("Error creating order:", error);
    res.status(500).json({ message: error.message });
    }
}

const getUserOrders = async (req, res) => {
  try {
    // ✅ 1️⃣ Validate user existence
    if (!req.user || !req.user._id) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: User not found or invalid token",
      });
    }

    // ✅ 2️⃣ Fetch all orders for the logged-in user
    const orders = await Order.find({ user:req.user._id }).sort({ createdAt: -1 });

    // ✅ 3️⃣ Check if orders exist
    if (!orders || orders.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No orders found for this user",
      });
    }

    // ✅ 4️⃣ Return orders with meta info
    res.status(200).json({
      success: true,
      count: orders.length,
      message: "Orders fetched successfully",
      orders,
    });
  } catch (error) {
    console.error("Error fetching user orders:", error);
    res.status(500).json({
      success: false,
      message: "Server error while fetching orders",
      error: error.message,
    });
  }
};

module.exports={createOrders,getUserOrders};