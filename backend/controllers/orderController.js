import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// Place Order - COD
const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;
    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    // Clear user's cart after placing the order
    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    res.json({ success: true, message: "Order placed successfully" });
  } catch (error) {
    console.log("Place Order Error:", error);
    res.json({ success: false, message: error.message });
  }
};

// Place Order - Stripe (To be implemented)
const placeOrderStripe = async (req, res) => {
  // TODO: Implement Stripe payment logic
  res.json({ success: false, message: "Stripe order not implemented yet." });
};

// Place Order - Razorpay (To be implemented)
const placeOrderRazorpay = async (req, res) => {
  // TODO: Implement Razorpay payment logic
  res.json({ success: false, message: "Razorpay order not implemented yet." });
};

// Get All Orders (Admin)
const allOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({ success: true, orders });
  } catch (error) {
    console.log("All Orders Error:", error);
    res.json({ success: false, message: error.message });
  }
};

// Get Orders of a Specific User
const userOrders = async (req, res) => {
  try {
    const { userId } = req.body;
    const orders = await orderModel.find({ userId });
    res.json({ success: true, orders });
  } catch (error) {
    console.log("User Orders Error:", error);
    res.json({ success: false, message: error.message });
  }
};

// Update Order Status (To be implemented)
const updateStatus = async (req, res) => {
  // TODO: Implement status update logic
  res.json({ success: false, message: "Update status not implemented yet." });
};

export {
  allOrders,
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  userOrders,
  updateStatus,
};
