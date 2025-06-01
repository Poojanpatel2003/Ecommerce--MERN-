import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

const placeOrder= async(req,res)=>{
    try {
        const {userId,items,amount,address}=req.body;
        const orderData={
            userId,
            items,
            address,
            amount,
            paymentMethod:"COD",
            payment:false,
            date:Date.now()
        }
<<<<<<< HEAD
        const newOrder=new orderModel(orderModel)
=======
        const newOrder=new orderModel(orderData)
>>>>>>> a91a623d6140d5bec0248dea9bdab1d68f0f9a08
        await newOrder.save()
        await userModel.findByIdAndUpdate(userId,{cartData:{}})
        res.json({success:true,message:"order Placed"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
        
    }
}
const placeOrderStripe= async(req,res)=>{

}
const placeOrderRazorpay= async(req,res)=>{
}


const allOrders= async(req,res)=>{
<<<<<<< HEAD

=======
    try {
        const orders =await orderModel.find({})
        res.json({success:true,orders})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
>>>>>>> a91a623d6140d5bec0248dea9bdab1d68f0f9a08
}


const userOrders= async(req,res)=>{
<<<<<<< HEAD

=======
    try {
        const {userId}=req.body;
        const orders=await orderModel.find({userId});
        res.json({success:true,orders})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
>>>>>>> a91a623d6140d5bec0248dea9bdab1d68f0f9a08
}


const updateStatus= async(req,res)=>{

}

export {allOrders,placeOrder,placeOrderRazorpay,placeOrderStripe,userOrders,updateStatus}
