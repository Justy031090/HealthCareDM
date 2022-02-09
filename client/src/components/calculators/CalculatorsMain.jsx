import React from 'react';
import { Link } from 'react-router-dom';
const CalculatorsMain = () => {
    return (
        <div>
            <Link to="/calculators/bolus" className="btn btn-primary">
                Bolus Calculator
            </Link>
        </div>
    );
};

export default CalculatorsMain;
