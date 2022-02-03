import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const { email, password } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });
    const submitForm = async (e) => {
        e.preventDefault();
        console.log('WOOOHOOO');
    };

    return (
        <div className="login-container">
            <h2 className="large text-primary">Sign In</h2>
            <p className="lead">
                <i className="fas fa-user"></i> Sign Into Your Account
            </p>
            <form className="form" onSubmit={(e) => submitForm(e)}>
                <div className="form-group">
                    <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        required
                        value={email}
                        onChange={(e) => onChange(e)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        minLength="6"
                        required
                        value={password}
                        onChange={(e) => onChange(e)}
                    />
                </div>
                <input
                    type="submit"
                    className="btn btn-primary"
                    value="Login"
                />
            </form>
            <p className="my-1">
                Dont have an account ? <Link to="/register">Sign Up</Link>
            </p>
        </div>
    );
};

export default Login;
