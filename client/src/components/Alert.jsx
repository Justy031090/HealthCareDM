import { useSelector } from 'react-redux';

const Alert = () => {
    const alerts = useSelector((state) => state.alerts);
    return (
        alerts !== null &&
        alerts.length > 0 &&
        alerts.map((alert) => {
            return (
                <div
                    key={alert.id}
                    className={`alert alert-${alert.alertType}`}
                >
                    {alert.msg}
                </div>
            );
        })
    );
};

export default Alert;
