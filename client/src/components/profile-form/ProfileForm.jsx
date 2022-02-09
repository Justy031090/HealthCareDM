import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createUpdateProfile } from '../../actions/userDetailsAction';
import './profile-form.css';

let initialState = {
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
    bio: '',
};
const ProfileForm = () => {
    const [displaySocial, setDisplaySocial] = useState(false);
    const [displayWizard, setDisplayWizard] = useState(false);
    const [formData, setFormData] = useState(initialState);
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
        // fieldOfStudy,
        // description,
        insulinSensitivity,
        insulinCarbRatio,
        bio,
    } = formData;

    const dispatch = useDispatch();

    const userDetails = useSelector((state) => state.userDetails);
    const { loading, profile } = userDetails;

    useEffect(() => {
        setFormData({
            company: loading || !profile.company ? '' : profile.company,
            status: loading || !profile.status ? '' : profile.status,
            linkedin: loading || !profile.social ? '' : profile.social.linkedin,
            youtube: loading || !profile.social ? '' : profile.social.youtube,
            instagram:
                loading || !profile.social ? '' : profile.social.instagram,
            facebook: loading || !profile.social ? '' : profile.social.facebook,
            twitter: loading || !profile.social ? '' : profile.social.twitter,
            school: loading || !profile.school ? '' : profile.school,
            degree: loading || !profile.degree ? '' : profile.degree,
            fieldOfStudy:
                loading || !profile.fieldOfStudy ? '' : profile.fieldOfStudy,
            description:
                loading || !profile.description ? '' : profile.description,
            insulinSensitivity:
                loading || !profile.bolusWizzard
                    ? ''
                    : profile.bolusWizzard.insulinSensitivity,
            insulinCarbRatio:
                loading || !profile.bolusWizzard
                    ? ''
                    : profile.bolusWizzard.insulinCarbRatio,
            website: loading || !profile.website ? '' : profile.website,
            location: loading || !profile.location ? '' : profile.location,
            bio: loading || !profile.bio ? '' : profile.bio,
        });
    }, [loading, profile]);

    const submitForm = (e) => {
        e.preventDefault();
        dispatch(createUpdateProfile(formData));
        window.scrollTo(0, 0);
        setFormData(initialState);
    };
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section className="create-profile-container">
            <h2 className="large text-primary">Update Your Profile</h2>
            {loading && <div>Loading...</div>}
            <p className="lead">
                <i className="fas fa-user"></i> Let's get some information to
                make people know you better
            </p>
            <form className="form" onSubmit={(e) => submitForm(e)}>
                <div className="form-group">
                    <select
                        name="status"
                        value={status}
                        onChange={(e) => handleChange(e)}
                    >
                        <option value="0">Select Your Role</option>
                        <option value="Endocrinologist, M.D">
                            Endocrinologist, M.D
                        </option>
                        <option value="Researcher">Researcher</option>
                        <option value="Dietitian">Dietitian</option>
                        <option value="Social Worker">Social Worker</option>
                        <option value="Student">Student</option>
                        <option value="Nurse, DSN">Nurse, DSN</option>
                        <option value="Other">Other</option>
                    </select>
                    <small className="form-text">
                        Give us an idea of your position
                    </small>
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Company"
                        name="company"
                        value={company}
                        onChange={(e) => handleChange(e)}
                    />
                    <small className="form-text">
                        Could be your own company or one you work for
                    </small>
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Website"
                        name="website"
                        value={website}
                        onChange={(e) => handleChange(e)}
                    />
                    <small className="form-text">
                        Could be your own or an informative website
                    </small>
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Location"
                        name="location"
                        value={location}
                        onChange={(e) => handleChange(e)}
                    />
                    <small className="form-text">
                        Share your location to find people nearby
                    </small>
                </div>
                <div className="form-group">
                    <textarea
                        placeholder="A short bio of yourself"
                        name="bio"
                        value={bio}
                        onChange={(e) => handleChange(e)}
                    ></textarea>
                    <small className="form-text">
                        Tell us a little about yourself
                    </small>
                </div>
                <div className="wizard-div">
                    <button
                        type="button"
                        className="btn btn-light"
                        onClick={() => setDisplayWizard(!displayWizard)}
                    >
                        Add Bolus Wizard Data
                    </button>
                </div>
                {displayWizard && (
                    <div>
                        <div className="form-group">
                            <input
                                type="number"
                                min="0"
                                placeholder="Insulin Sensitivity"
                                name="insulinSensitivity"
                                value={insulinSensitivity}
                                onChange={(e) => handleChange(e)}
                            />
                            <small className="form-text">
                                Valid Insulin Sensitivity Factor (ISF) given by
                                a physician
                            </small>
                        </div>
                        <div className="form-group">
                            <input
                                type="number"
                                min="0"
                                placeholder="Insulin-Card Ratio"
                                name="insulinCarbRatio"
                                value={insulinCarbRatio}
                                onChange={(e) => handleChange(e)}
                            />
                            <small className="form-text">
                                Valid Insulin to Carb Ratio (ICR) given by a
                                physician
                            </small>
                        </div>
                    </div>
                )}
                <div className="social-div">
                    <button
                        type="button"
                        className="btn btn-light"
                        onClick={() => setDisplaySocial(!displaySocial)}
                    >
                        Add Social Network Links
                    </button>
                </div>
                {displaySocial && (
                    <div>
                        <div className="form-group social-input">
                            <i className="fab fa-twitter fa-2x"></i>
                            <input
                                type="text"
                                placeholder="Twitter URL"
                                name="twitter"
                                value={twitter}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>

                        <div className="form-group social-input">
                            <i className="fab fa-facebook fa-2x"></i>
                            <input
                                type="text"
                                placeholder="Facebook URL"
                                name="facebook"
                                value={facebook}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>

                        <div className="form-group social-input">
                            <i className="fab fa-youtube fa-2x"></i>
                            <input
                                type="text"
                                placeholder="YouTube URL"
                                name="youtube"
                                value={youtube}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>

                        <div className="form-group social-input">
                            <i className="fab fa-linkedin fa-2x"></i>
                            <input
                                type="text"
                                placeholder="Linkedin URL"
                                name="linkedin"
                                value={linkedin}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>

                        <div className="form-group social-input">
                            <i className="fab fa-instagram fa-2x"></i>
                            <input
                                type="text"
                                placeholder="Instagram URL"
                                name="instagram"
                                vlaue={instagram}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                    </div>
                )}
                <input type="submit" className="btn btn-primary" />
                <Link to="/profile" className="btn btn-light">
                    Go Back
                </Link>
            </form>
        </section>
    );
};

export default ProfileForm;
