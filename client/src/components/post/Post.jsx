import React, { useEffect } from 'react';
import { getPost } from '../../actions/postsAction';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import PostItem from '../posts/PostItem';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';
const Post = () => {
    const dispatch = useDispatch();
    const params = useParams();

    const postState = useSelector((state) => state.post);
    const { post, loading } = postState;

    useEffect(() => {
        dispatch(getPost(params.id));
    }, [dispatch, params]);

    return loading || post === null ? (
        <div>Loading...</div>
    ) : (
        <>
            <Link to="/forum/posts" className="btn btn-dark my-1">
                Go Back
            </Link>
            <PostItem post={post} showActions={false} />
            <CommentForm postId={post?._id} />
            <div className="comments">
                {post?.comments.map((comment) => {
                    return (
                        <CommentItem
                            key={comment?._id}
                            comment={comment}
                            postId={post?._id}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default Post;
