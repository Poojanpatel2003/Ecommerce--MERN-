import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/Mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoutes.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js';
const app=express()
const port=process.env.PORT || 4000
connectDB();
connectCloudinary();

//middleware
app.use(express.json())
app.use(cors())
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)
//api endpoints
app.get('/',(req,res)=>{
    res.send("API Working");
})
app.use('/api/user',userRouter);



app.listen(port,()=>{
    console.log('Server running on PORT: '+port)
})