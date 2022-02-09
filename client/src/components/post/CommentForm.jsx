import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from '../../actions/postsAction';

const CommentForm = ({ postId }) => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addComment(postId, { text }));
        setText('');
    };

    return (
        <div className="post-form">
            <form className="form my-1" onSubmit={(e) => handleSubmit(e)}>
                <textarea
                    name="text"
                    placeholder="Leave a comment"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    rows="50"
                    columns="10"
                    required
                ></textarea>
                <input
                    type="submit"
                    className="btn btn-dark my-1"
                    value="Comment"
                />
            </form>
        </div>
    );
};

export default CommentForm;
