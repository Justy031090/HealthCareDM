import React from 'react';
import { Link } from 'react-router-dom';
import './forum.css';

const Forum = () => {
    return (
        <div className="forum-container">
            <Link to="/profiles" className="btn btn-primary">
                Profiles
            </Link>
            <Link to="/forum/posts" className="btn btn-primary">
                Posts
            </Link>
        </div>
    );
};

export default Forum;
