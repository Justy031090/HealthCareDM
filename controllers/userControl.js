import User from '../models/userModel';

export const createUser = async (req, res) => {
    const { email, firstName, lastName, password } = req.body;
    try {
        const user = new User({
            firstName,
            lastName,
            email,
            password,
        });
        await user.save();
        const token = await user.generateToken();
        res.send({ user, token });
    } catch (e) {
        if (e.code == 11000) return res.send('Email Already Exists');
        else return res.send('Server Error');
    }
};
