import Mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const connection = await Mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected ${connection.connection.host}`);
    } catch (error) {
        console.error(`Error : ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;
