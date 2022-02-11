import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getArticales } from '../../actions/articleActions';
import NewsFid from './NewsFid';

import './home.css';

const Home = () => {
    const dispatch = useDispatch();

    const articleState = useSelector((state) => state.articles);
    const { loading, articles } = articleState;

    useEffect(() => {
        dispatch(getArticales());
    }, [dispatch]);
    return (
        <section className="landing">
            <div className="landing-inner">
                <h2 className="x-large">Healthcare DM</h2>
                <p className="lead">because we care about you</p>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <div className="grid-container">
                        {articles?.map((article) => {
                            return (
                                <div className="wrapper">
                                    <NewsFid
                                        key={article._id}
                                        article={article}
                                    />
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Home;
