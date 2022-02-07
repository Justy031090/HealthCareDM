import { Link } from 'react-router-dom';
import moment from 'moment';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const PostItem = ({ post }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(post);
    });

    const postState = useSelector((state) => state.post);
    const { posts, loading } = postState;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    return (
        <div className="post bg-white">
            <div>
                <Link to="">
                    <img
                        className="round-img"
                        src={post?.avatar}
                        alt="Not Found"
                    />
                    <h4>
                        {post?.firstName} {post?.lastName}
                    </h4>
                </Link>
            </div>
            <div>
                <p className="text">{post?.text}</p>
                <p className="post-date">
                    {moment(post?.createdAt).format('MMMM Do YYYY, h:mm a')}
                </p>
                <button type="button" className="btn btn-light">
                    <i className="fas fa-thumbs-up"></i>
                    <span>{post?.likes?.length}</span>
                </button>
                <button type="button" className="btn btn-light">
                    <i className="fas fa-thumbs-down"></i>
                </button>
                <Link to={`/post/${post?._id}`} className="btn btn-primary">
                    Discussion
                    {post?.comments.length > 0 && (
                        <span className="comment-count">
                            {post?.comments?.length}
                        </span>
                    )}
                </Link>
                {userInfo._id === post.user && (
                    <button type="button" className="btn btn-danger">
                        <i className="fas fa-times"></i>
                    </button>
                )}
            </div>
        </div>
    );
};

export default PostItem;
