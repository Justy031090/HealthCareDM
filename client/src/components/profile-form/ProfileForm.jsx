import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './profile-form.css';

const ProfileForm = () => {
    const [formData, setFormData] = useState({
        company: '',
        status: '',
        linkedin: '',
        youtube: '',
        instagram: '',
        facebook: '',
        twitter: '',
        school: '',
        degree: '',
        fieldOfStudy: '',
        description: '',
        insulinSensitivity: '',
        insulinCarbRatio: '',
        website: '',
        location: '',
    });
    const {
        company,
        website,
        location,
        status,
        linkedin,
        youtube,
        instagram,
        facebook,
        twitter,
        school,
        degree,
        fieldOfStudy,
        description,
        insulinSensitivity,
        insulinCarbRatio,
    } = formData;
    return (
        <section class="create-profile-container">
            <h2 class="large text-primary">Update Your Profile</h2>
            <p class="lead">
                <i class="fas fa-user"></i> Let's get some information to make
                people know you better
            </p>
            <form class="form">
                <div class="form-group">
                    <select name="status">
                        <option value="0">Select Your Role</option>
                        <option value="Endocrinologist, M.D">
                            Endocrinologist, M.D
                        </option>
                        <option value="Researcher">Researcher</option>
                        <option value="Dietitian">Dietitian</option>
                        <option value="Social Worker">Social Worker</option>
                        <option value="Student">Student</option>
                        <option value="Nurse, DSN">Nurse, DSN</option>
                        <option value="Sweetie Two">Type 1</option>
                        <option value="Sweetie Two">Type 2</option>
                        <option value="Other">Other</option>
                    </select>
                    <small class="form-text">
                        Give us an idea of your position
                    </small>
                </div>
                <div class="form-group">
                    <input type="text" placeholder="Company" name="company" />
                    <small class="form-text">
                        Could be your own company or one you work for
                    </small>
                </div>
                <div class="form-group">
                    <input type="text" placeholder="Website" name="website" />
                    <small class="form-text">
                        Could be your own or an informative website
                    </small>
                </div>
                <div class="form-group">
                    <input type="text" placeholder="Location" name="location" />
                    <small class="form-text">
                        Share your location to find people nearby
                    </small>
                </div>
                <div class="form-group">
                    <input
                        type="text"
                        placeholder="Insulin Sensitivity"
                        name="insulinSensitivity"
                    />
                    <small class="form-text">
                        You can provide us the Insulin Sensitivity for better
                        calculations
                    </small>
                </div>
                <div class="form-group">
                    <input
                        type="text"
                        placeholder="Insulin-Card Ratio"
                        name="insulinCarbRatio"
                    />
                    <small class="form-text">
                        You can provide us the Insulin-Card Ratio for better
                        calculations
                    </small>
                </div>
                <div class="form-group">
                    <textarea
                        placeholder="A short bio of yourself"
                        name="bio"
                    ></textarea>
                    <small class="form-text">
                        Tell us a little about yourself
                    </small>
                </div>

                <div class="my-2">
                    <button type="button" class="btn btn-light">
                        Add Social Network Links
                    </button>
                </div>

                <div class="form-group social-input">
                    <i class="fab fa-twitter fa-2x"></i>
                    <input
                        type="text"
                        placeholder="Twitter URL"
                        name="twitter"
                    />
                </div>

                <div class="form-group social-input">
                    <i class="fab fa-facebook fa-2x"></i>
                    <input
                        type="text"
                        placeholder="Facebook URL"
                        name="facebook"
                    />
                </div>

                <div class="form-group social-input">
                    <i class="fab fa-youtube fa-2x"></i>
                    <input
                        type="text"
                        placeholder="YouTube URL"
                        name="youtube"
                    />
                </div>

                <div class="form-group social-input">
                    <i class="fab fa-linkedin fa-2x"></i>
                    <input
                        type="text"
                        placeholder="Linkedin URL"
                        name="linkedin"
                    />
                </div>

                <div class="form-group social-input">
                    <i class="fab fa-instagram fa-2x"></i>
                    <input
                        type="text"
                        placeholder="Instagram URL"
                        name="instagram"
                    />
                </div>
                <input type="submit" class="btn btn-primary" />
                <Link to="/profile" class="btn btn-light">
                    Go Back
                </Link>
            </form>
        </section>
    );
};

export default ProfileForm;
