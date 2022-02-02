import express from 'express';
import dotenv from 'dotenv';
import connectDB from './data/mongoose.js';
import cors from 'cors';
import users from './routes/userRoute.js';
import auth from './routes/authRoute.js';
import post from './routes/postRoute.js';
import profile from './routes/profileRoute.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

//define routes
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/post', post);
app.use('/api/profile', profile);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
    });
}
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
