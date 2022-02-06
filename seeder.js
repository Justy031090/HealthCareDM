import mongoose from 'mongoose';
import dotenv from 'dotenv';
import users from './data/users.js';
import User from './models/userModel.js';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

const importData = async () => {
    try {
        await User.deleteMany();

        const createdUsers = await User.insertMany(users);
        const adminUser = createdUsers[0]._id;
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
        await User.deleteMany({});
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};

if (process.argv[2] === '-d') {
    console.log(process.argv[2]);
    destroyData();
} else {
    importData();
}
