import { Link } from 'react-router-dom';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../actions/postsAction';

const PostItem = ({ post, showActions }) => {
    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    return (
        <div className="post bg-white">
            <div>
                <Link to={`/profiles/${post?.user}`}>
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
                {showActions && (
                    <>
                        <button
                            type="button"
                            className="btn btn-light"
                            onClick={() => dispatch(addLike(post._id))}
                        >
                            <i className="fas fa-thumbs-up"></i>{' '}
                            {post?.likes.length > 0 && (
                                <span>{post?.likes?.length}</span>
                            )}
                        </button>
                        <button
                            type="button"
                            className="btn btn-light"
                            onClick={() => dispatch(removeLike(post._id))}
                        >
                            <i className="fas fa-thumbs-down"></i>
                        </button>
                        <Link
                            to={`/forum/posts/${post?._id}`}
                            className="btn btn-primary"
                        >
                            Discussion{' '}
                            {post?.comments.length > 0 && (
                                <span className="comment-count">
                                    {post?.comments.length}
                                </span>
                            )}
                        </Link>
                        {userInfo._id === post.user && (
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() => dispatch(deletePost(post._id))}
                            >
                                <i className="fas fa-times"></i>
                            </button>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};
PostItem.defaultProps = {
    showActions: true,
};
export default PostItem;
