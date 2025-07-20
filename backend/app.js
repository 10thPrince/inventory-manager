import express from "express";
import dotenv from 'dotenv';
import dbConnect from "./config/db.js";

dotenv.config();

const app = express();

const port = process.env.PORT || 4001;

app.get('/', (req, res) => {
    res.status(200).send('App running successfully!!')
})


app.listen(port, async () => {
    try {
        await dbConnect();
        console.log(`App running on ${port}`);
    } catch (err) {
        console.log(err)
    }


})