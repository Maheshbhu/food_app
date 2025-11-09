const mongoose=require("mongoose")
const orderSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    items: [
      {
        name: { type: String, required: true },
        image: { type: String },
        price: { type: Number, required: true },
        qty: { type: Number, required: true },
      },
    ],
    total:{
        type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
     paymentStatus: {
      type: String,
      enum: ["Pending", "Paid", "Failed"],
      default: "Pending",
    },
       transactionId: {
      type: String, // from Razorpay/Stripe if used
      default: null,
    },
     status: {
      type: String,
      enum: ["Placed", "Preparing", "Out for Delivery", "Delivered", "Cancelled"],
      default: "Placed",
    },
}, { timestamps: true })
module.exports = mongoose.model("Order", orderSchema);