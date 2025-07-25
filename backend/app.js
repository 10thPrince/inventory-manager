import express from "express";
import dotenv from 'dotenv';
import dbConnect from "./config/db.js";
import productRoutes from "./routes/productRoutes.js"

dotenv.config();

const app = express();

const port = process.env.PORT || 4001;


app.use(express.json());

app.use("/product", productRoutes);


app.listen(port, async () => {
    try {
        await dbConnect();
        console.log(`App running on ${port}`);
    } catch (err) {
        console.log(err)
    }


})