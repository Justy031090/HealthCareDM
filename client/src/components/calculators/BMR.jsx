import React, { useState } from 'react';

const BMR = () => {
    const [measure, setMeasure] = useState({
        height: '',
        weight: '',
        gender: '',
        age: '',
    });

    const { height, weight, age, gender } = measure;
    const [showCalculator, setShowCalculator] = useState(true);
    const [calculate, setCalculate] = useState(null);

    const onChange = (e) => {
        setMeasure({ ...measure, [e.target.name]: e.target.value });
    };
    const onCheck = (e) => {
        if (e.target.checked) setMeasure({ ...measure, gender: e.target.id });
    };

    const calculateBMR = (age, gender, weight, height) => {
        if (gender === 'male') {
            return 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
        }
        return 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setCalculate(calculateBMR(age, gender, weight, height));

        setShowCalculator(!showCalculator);
    };

    return (
        <div className="bmr-container">
            <h2 className="large text-primary">Basal Metabolic Rate</h2>
            <ul className="lead">
                <li></li>
                <li></li>
            </ul>

            <div className="calculator-form my-1">
                <h3 className="large text-primary">BMR Calculator</h3>
                {showCalculator ? (
                    <form className="form" onSubmit={(e) => handleSubmit(e)}>
                        <div className="form-group calculator">
                            <div className="form-group calculator">
                                <input
                                    type="radio"
                                    id="male"
                                    name="gender"
                                    required
                                    onChange={(e) => onCheck(e)}
                                />
                                <label htmlFor="gender">Male</label>
                                <input
                                    type="radio"
                                    id="female"
                                    name="gender"
                                    required
                                    onChange={(e) => onCheck(e)}
                                />
                                <label htmlFor="gender">Female</label>
                                <small className="form-text">
                                    Select your gender
                                </small>
                            </div>
                            <input
                                type="number"
                                min={0}
                                placeholder="Age"
                                name="age"
                                required
                                value={age}
                                onChange={(e) => onChange(e)}
                            />
                            <small className="form-text">Enter your age</small>
                        </div>
                        <div className="form-group calculator">
                            <input
                                type="number"
                                min={0}
                                placeholder="Weight in kg"
                                name="weight"
                                required
                                value={weight}
                                onChange={(e) => onChange(e)}
                            />
                            <small className="form-text">
                                Your weight in killograms
                            </small>
                        </div>

                        <div className="form-group calculator">
                            <input
                                type="number"
                                min={0}
                                placeholder="Enter height in cm"
                                name="height"
                                required
                                value={height}
                                onChange={(e) => onChange(e)}
                            />
                            <small className="form-text">
                                Your height in centimeters
                            </small>
                        </div>

                        <input
                            type="submit"
                            className="btn btn-primary"
                            value="Calculate"
                        />
                    </form>
                ) : (
                    <>
                        <h4>{calculate}</h4>
                        <input
                            type="submit"
                            className="btn btn-primary"
                            value="Back"
                            onClick={(e) => setShowCalculator(true)}
                        />
                    </>
                )}
            </div>
        </div>
    );
};

export default BMR;
