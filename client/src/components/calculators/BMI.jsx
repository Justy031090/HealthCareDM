import React, { useState } from 'react';

const BMI = () => {
    const [measure, setMeasure] = useState({
        height: '',
        weight: '',
    });
    const [category, setCategory] = useState();
    const [compute, setCompute] = useState(null);
    const [showCalculator, setShowCalculator] = useState(true);

    const { height, weight } = measure;

    const calculateBMI = (weight, height) => {
        let heightInMeters = height / 100;
        let bmi = weight / (heightInMeters * heightInMeters);
        return bmi;
    };

    const onChange = (e) => {
        setMeasure({ ...measure, [e.target.name]: e.target.value });
    };

    const cat = (compute) => {
        if (compute < 18.5) return 'Underweight';
        if (compute > 18.5 && compute <= 24.9) return 'Healthy';
        if (compute >= 25 && compute < 29.9) return 'Overweight';
        if (compute >= 30) return 'Obesity';
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const result = calculateBMI(weight, height);
        setCompute(result);
        setCategory(cat(result));

        setShowCalculator(!showCalculator);
    };

    return (
        <div className="bmi-container">
            <h2 className="large text-primary">Body Mass Index</h2>
            <ul className="lead">
                <li>
                    BMI is an acronym for the term body mass index. It’s a
                    measurement of a person’s body mass index in relation to
                    their height for all adults, irrespective of age and sex.
                </li>
                <li>
                    In 1985 the National Institutes of Health (NIH) of USA
                    recommended that physicians adopt the BMI as an index of
                    obesity. It has now become the standard formula to determine
                    what is a normal BMI weight, underweight, overweight and
                    obese. These weight categories are used to help assess a
                    person’s risk of obesity related diseases.
                </li>
                <li>
                    BMI provides an indication of an ideal BMI. The BMI ranges
                    are:
                    <ul className="ul-2">
                        <li className="li-2 Underweight">
                            Underweight = BMI &lt; 18.5{' '}
                        </li>
                        <li className="li-2 Healthy">
                            Healthy BMI weight = BMI 18.5–24.9 (Average BMI)
                        </li>
                        <li className="li-2 Overweight">
                            Overweight = BMI 25–29.9
                        </li>
                        <li className="li-2 Obesity">
                            Obesity = BMI of 30 or above
                        </li>
                    </ul>
                </li>
            </ul>

            <div className="calculator-form my-1">
                <h3 className="large text-primary">BMI Calculator</h3>
                {showCalculator ? (
                    <form className="form" onSubmit={(e) => handleSubmit(e)}>
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

                        <input
                            type="submit"
                            className="btn btn-primary"
                            value="Calculate"
                        />
                    </form>
                ) : (
                    <>
                        <h4>
                            Your BMI is {Math.floor(compute)}, this indicates
                            you probably are in{' '}
                            <span className={category}>{category}</span> state.
                        </h4>
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

export default BMI;
