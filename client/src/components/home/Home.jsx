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
                <h2 className="large text-primary">What's new ?</h2>
                {loading ? (
                    <div className="loader"></div>
                ) : (
                    <div className="grid-container">
                        {articles?.map((article) => {
                            return (
                                <div key={article._id} className="wrapper">
                                    <NewsFid article={article} />
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
