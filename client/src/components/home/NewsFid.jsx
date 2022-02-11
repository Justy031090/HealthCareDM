import React from 'react';
import { Link } from 'react-router-dom';

const NewsFid = ({ article }) => {
    return (
        <div className="grid-item">
            <div className="top">
                <img src={article.img} alt="" />
                <h2>{article.header}</h2>
            </div>

            <p>{article.summary}</p>

            <div className="bottom">
                <Link to="/posts" className="btn btn-primary">
                    Read More
                </Link>
                <div className="line"></div>
            </div>
        </div>
    );
};

export default NewsFid;
