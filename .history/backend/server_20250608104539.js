import express from 'express';

import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.route.js';
import path from "path";
dotenv.config();
const app = express();
const port = process.env.VITE_BACKEND_PORT || 5000;


// Middleware
app.use(express.json()); // Middleware to parse JSON bodies

// Routes
app.use("/api/products", productRoutes); 

if (process.env.NODE_ENV === "production") {
    app.use(express.static("frontend/dist"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
    });
}


//Postman 
app.listen(port, () => {
    console.log("Server is running on port", port);
    connectDB();
});

   