import express from 'express';

import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.route.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;


// Middleware
app.use(express.json()); // Middleware to parse JSON bodies

// Routes
app.use("/api/products", productRoutes); 

//Postman 
app.listen(process.env.PORT, () => {
    console.log("Server is running on port", process.env.PORT);
    connectDB();
});

   