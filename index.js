import express from 'express';
import dummyData from './data/DummyData.js';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

const app = express();

app.get('/', (req, res) => {
    res.json(dummyData);
});
const PORT = process.env.PORT || 5000;
app.listen(
    PORT,
    console.log(`Server Running in ${process.env.NODE_ENV} on port ${PORT}`)
);
