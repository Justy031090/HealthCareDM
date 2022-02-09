import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../../actions/postsAction';

const PostForm = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addPost({ text }));
        setText('');
    };
    return (
        <div className="post-form">
            <div className="bg-primary">
                <h3 className="create-post-header">Create Post</h3>
            </div>
            <form className="form my-1" onSubmit={(e) => handleSubmit(e)}>
                <textarea
                    name="text"
                    placeholder="Create a Post"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    required
                ></textarea>
                <input
                    type="submit"
                    className="btn btn-dark my-1"
                    value="Submit"
                />
            </form>
        </div>
    );
};

export default PostForm;
