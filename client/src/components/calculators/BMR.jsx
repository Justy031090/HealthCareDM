import React, { useState } from 'react';

const BMR = () => {
    const [measure, setMeasure] = useState({
        height: '',
        weight: '',
        gender: '',
        age: '',
        activity: '',
    });

    const { height, weight, age, gender, activity } = measure;
    const [showCalculator, setShowCalculator] = useState(true);
    const [calculate, setCalculate] = useState(null);
    const [tdee, setTdee] = useState(null);

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
        if (activity) {
            setTdee(calculateBMR(age, gender, weight, height) * activity);
        }

        setShowCalculator(!showCalculator);
    };

    return (
        <div className="bmr-container">
            <h2 className="large text-primary">Basal Metabolic Rate</h2>
            <ul className="lead">
                <li>
                    Your Basal Metabolic Rate (BMR) is the number of calories
                    you burn as your body performs basic (basal) life-sustaining
                    function. Commonly also termed as Resting Metabolic Rate
                    (RMR), which is the calories burned if you stayed in bed all
                    day. In either case, many utilize the basal metabolic rate
                    formula to calculate their body’s metabolism rate.
                </li>
                <li>
                    Your BMR defines your basal metabolism rate which makes up
                    about 60-70% of the calories we use (“burn” or expend). This
                    includes the energy your body uses to maintain the basic
                    function of your living and breathing body,<br></br>
                    including:
                    <ul className="ul-2">
                        <li className="li-2">The beating of our heart</li>
                        <li className="li-2"> Cell production</li>
                        <li className="li-2">Respiration</li>
                        <li className="li-2">
                            maintenance of body temperature
                        </li>
                        <li className="li-2">
                            The Circulation Nutrient processing
                        </li>
                    </ul>
                </li>

                <li>
                    Your unique metabolism rate, or BMR, is influenced by a
                    number of factors including age, weight, height, gender,
                    environmental temperature, dieting, and exercise habits.
                </li>
                <li>
                    TDEE stands for total daily energy expenditure. It is the
                    total energy that a person uses in a day. TDEE is hard to
                    measure accurately and varies day by day. More often, it is
                    estimated using factors such as a person's basal metabolic
                    rate (BMR), activity level, and the thermic effect of food.
                </li>
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
                            <div className="form-group">
                                <select
                                    className="bmr-select"
                                    name="activity"
                                    value={activity}
                                    onChange={(e) => onChange(e)}
                                >
                                    <optgroup>
                                        <option value={0}>
                                            Select Your Activity
                                        </option>
                                        <option value={1.2}>
                                            Sedetary : Little or no exercise
                                        </option>
                                        <option value={1.375}>
                                            Light: exercise 1-3 times/week
                                        </option>
                                        <option value={1.55}>
                                            Moderate: exercise 4-5 times/week
                                        </option>
                                        <option value={1.725}>
                                            Active: daily exercise or intense
                                            exercise 6-7 times/week
                                        </option>
                                        <option value={1}>
                                            Extra active: very intense exercise
                                            daily, or physical job
                                        </option>
                                    </optgroup>
                                </select>
                                <small className="form-text">
                                    Give us an idea of your position
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
                        {activity > 0 ? (
                            <h4>
                                You daily calories burn in rest are{' '}
                                {Math.floor(calculate)}, according to your
                                activity level the total burned calories are{' '}
                                {Math.floor(tdee)}
                            </h4>
                        ) : (
                            <h4>
                                You daily calories burn in rest are{' '}
                                {Math.floor(calculate)}, to calculate TDEE
                                please select activity level.
                            </h4>
                        )}
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
