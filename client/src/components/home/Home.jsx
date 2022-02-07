import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
    return (
        <section className="landing">
            <div className="landing-inner">
                <h2 className="x-large">Healthcare DM</h2>
                <p className="lead">
                    because we care about you Lorem ipsum dolor, sit amet
                    consectetur adipisicing elit. Dolorum architecto deleniti
                    ipsa, officia consectetur illum.
                </p>
                <div>
                    <Link to="/register" className="btn btn-primary">
                        Sign Up
                    </Link>
                    <Link to="/login" className="btn btn-light">
                        Login
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Home;
