import React, { useEffect } from 'react';
import { getArticleById } from '../../actions/articleActions';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './article.css';

const ProfileById = () => {
    const dispatch = useDispatch();
    const params = useParams();

    const articleState = useSelector((state) => state.article);
    const { loading, article } = articleState;

    useEffect(() => {
        dispatch(getArticleById(params.id));
    }, [dispatch, params]);

    return (
        <div className="article-container">
            {loading ? (
                <div className="loader"></div>
            ) : (
                <div className="article-container">
                    <div className="article">
                        <h2 className="large text-primary article-header">
                            {article.header.toUpperCase()}
                        </h2>
                        <div className="article-date">
                            <span className="date">{article.date}</span>
                        </div>
                        <div className="line"></div>
                        <div className="article-summary">
                            <p>{article.summary}</p>
                        </div>
                        <div className="paragraphs">
                            {article.paragraphs.map((paragraph) => {
                                return (
                                    <div>
                                        <h3 className="article-subheader">
                                            {paragraph.subheader}
                                        </h3>

                                        <p className="article-paragraph">
                                            {paragraph.text}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="aside">
                        <div className="donations-container">
                            <h2 className="btn  btn-success donations-header">
                                You Make Our Work Possible
                            </h2>
                            <p>
                                Someone is diagnosed with diabetes every two
                                minutes. Your donation can change lives.
                            </p>
                            <div>
                                <Link to="/" className="btn btn-success">
                                    Donate
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfileById;
