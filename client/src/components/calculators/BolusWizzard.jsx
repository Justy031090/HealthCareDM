import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './calculators.css';

const initialState = {
    insulinSensitivity: '',
    insulinCarbRatio: '',
    totalMealCarbs: '',
    glucoseBloodTest: '',
    dailyDosage: '',
};

const BolusWizzard = () => {
    const [compute, setCompute] = useState(null);
    const [showCalculator, setShowCalculator] = useState(true);
    const [isKnown, setIsKnown] = useState(true);
    const [bolusWiz, setBolusWiz] = useState(initialState);
    const {
        totalMealCarbs,
        insulinCarbRatio,
        insulinSensitivity,
        glucoseBloodTest,
        dailyDosage,
    } = bolusWiz;

    const userDetails = useSelector((state) => state.userDetails);
    const { loading, profile } = userDetails;

    useEffect(() => {
        setBolusWiz({
            insulinSensitivity:
                loading || !profile.bolusWizzard
                    ? ''
                    : profile.bolusWizzard.insulinSensitivity,

            insulinCarbRatio:
                loading || !profile.bolusWizzard
                    ? ''
                    : profile.bolusWizzard.insulinCarbRatio,
            totalMealCarbs: '',
            glucoseBloodTest: '',
        });
    }, [loading, profile, showCalculator]);

    const onChange = (e) => {
        setBolusWiz({ ...bolusWiz, [e.target.name]: e.target.value });
    };

    const handleBack = () => {
        setShowCalculator(!showCalculator);
        setBolusWiz(initialState);
    };

    const totalBolus = () => {
        const tofix = glucoseBloodTest - 100;
        const mealBolus = totalMealCarbs / insulinCarbRatio;
        let fixBolus;

        if (dailyDosage) {
            fixBolus = tofix / (1800 / dailyDosage);
        } else {
            fixBolus = tofix / insulinSensitivity;
        }

        const totalBolus = fixBolus + mealBolus;
        return totalBolus;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const result = totalBolus();
        setCompute(result);
        setShowCalculator(!showCalculator);
        setBolusWiz(initialState);
    };
    const redirectCalculator = () => {
        setBolusWiz(initialState);
        setIsKnown(!isKnown);
    };

    return (
        <div className="bolus-wizzard-container">
            <h2 className="large text-primary">Calculating Bolus Injections</h2>
            {loading && <div className="loader"></div>}

            <ul className="lead">
                <li>
                    Use the Insulin to Carbohydrate Ratio (ICR) to calculate
                    your insulin dose.
                    <ul className="ul-2">
                        <li className="li-2">
                            ICR is the amount of rapid-acting insulin (I) you
                            need for a specific amount of carbohydrate (C) in
                            food. This is the number of grams of carbohydrates
                            that 1 unit of rapid-acting insulin will cover.
                        </li>
                    </ul>
                    <ul className="ul-2">
                        <li className="li-2">
                            Example: 1 unit of rapid-acting insulin will cover
                            10 grams carbohydrates. This may also be written
                            1:10.
                        </li>
                    </ul>
                </li>
                <li>The ratio may be different at different meals.</li>
                <li>
                    Using the ICR will control blood glucose best if insulin is
                    given before meals. Calculate your ICR based on what you
                    WILL be eating. We strongly suggest that rapid-acting
                    insulin be given before meals.
                </li>
                <li>
                    Do not give rapid-acting insulin when you eat carbohydrate
                    to treat a low blood glucose or to prevent a low blood
                    glucose.
                </li>
            </ul>

            <h2 className="large text-primary">
                Calculating a Bolus Dose for High Blood Glucose (Correction
                Bolus)
            </h2>

            <ul className="lead">
                <li>
                    Use the high blood glucose (hyperglycemia) correction
                    factor, also called correction factor (CF) or sensitivity.
                    Use this to calculate the correction bolus.
                    <ul className="ul-2">
                        <li className="li-2">
                            Correction factor is how much 1 unit of rapid-acting
                            insulin will reduce the blood glucose number.
                        </li>
                        <li className="li-2">
                            The target number is the blood glucose number that
                            you want.
                        </li>
                    </ul>
                </li>
                <li>
                    If rapid-acting insulin is given with a meal, the correction
                    dose is added to meal dose. This combined dose is rounded up
                    or down.
                </li>
                <li>
                    If rapid-acting insulin is given after a meal, check the
                    blood glucose before the meal. Use that blood glucose number
                    to calculate the correction dose.
                </li>
            </ul>

            <div className="calculator-form my-1">
                <h3 className="large text-primary">Bolus Calculator</h3>
                {showCalculator ? (
                    <form className="form" onSubmit={(e) => handleSubmit(e)}>
                        <div className="form-group calculator">
                            <input
                                type="number"
                                min={0}
                                placeholder="Glucose Blood Test"
                                name="glucoseBloodTest"
                                required
                                value={glucoseBloodTest}
                                onChange={(e) => onChange(e)}
                            />
                            <small className="form-text">
                                The baseline of our calculator is 100 mg/dl
                            </small>
                        </div>
                        <div className="form-group calculator">
                            <input
                                type="number"
                                min={0}
                                placeholder="Total Meal Carbs"
                                name="totalMealCarbs"
                                required
                                value={totalMealCarbs}
                                onChange={(e) => onChange(e)}
                            />
                            <small className="form-text">
                                Your total planned meal Carbs in grams
                            </small>
                        </div>
                        {isKnown ? (
                            <div className="form-group calculator">
                                <input
                                    type="number"
                                    min={1}
                                    placeholder="Insulin Sensetivity Factor"
                                    name="insulinSensitivity"
                                    required
                                    value={insulinSensitivity}
                                    onChange={(e) => onChange(e)}
                                />

                                <small className="form-text">
                                    Dont know your ISF but know your daily
                                    dosage ?
                                    <i
                                        className="calculator-redirect"
                                        onClick={(e) => redirectCalculator()}
                                    >
                                        Click Here
                                    </i>
                                </small>

                                <small className="form-text danger">
                                    Valid Insulin Sensitivity Factor (ISF) given
                                    by a physician
                                </small>
                            </div>
                        ) : (
                            <div className="form-group calculator">
                                <input
                                    type="number"
                                    min={0}
                                    placeholder="Your daily insulin dosage"
                                    name="dailyDosage"
                                    required
                                    value={dailyDosage}
                                    onChange={(e) => onChange(e)}
                                />

                                <small className="form-text">
                                    Know your insulin sensitivity ?
                                    <i
                                        className="calculator-redirect"
                                        onClick={(e) => redirectCalculator()}
                                    >
                                        Click Here
                                    </i>
                                </small>

                                <small className="form-text danger">
                                    Your daily average insulin dosage will be
                                    used to calculate average ISR.
                                </small>
                            </div>
                        )}
                        <div className="form-group calculator">
                            <input
                                type="number"
                                min={1}
                                placeholder="Insulin to Carb Ratio"
                                name="insulinCarbRatio"
                                required
                                value={insulinCarbRatio}
                                onChange={(e) => onChange(e)}
                            />
                            <small className="form-text">
                                The baseline of our calculator is 1:15
                            </small>
                            <small className="form-text danger">
                                Valid Insulin to Carb Ratio (ICR) given by a
                                physician
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
                            Bolus to give is {compute.toFixed(2)} Insulin Units
                        </h4>
                        <input
                            type="submit"
                            className="btn btn-primary"
                            value="Back"
                            onClick={() => handleBack()}
                        />
                    </>
                )}
            </div>
        </div>
    );
};

export default BolusWizzard;
