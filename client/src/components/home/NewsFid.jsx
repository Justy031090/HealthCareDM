import React from 'react';

const NewsFid = ({ article }) => {
    return (
        <div className="grid-item">
            <img src={article?.img} alt="" />
            <h2>{article?.header}</h2>
            <p>{article?.summary}</p>
        </div>
    );
};

export default NewsFid;
