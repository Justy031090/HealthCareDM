import React from 'react';
import { deleteComment } from '../../actions/postsAction';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';

const CommentItem = ({ postId, comment }) => {
    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    return (
        <div className="post bg-white p-1 my-1">
            <div>
                <Link to={`/profile/${comment?.user}`}>
                    <img
                        className="round-img"
                        src={comment?.avatar}
                        alt="Not Found"
                    />
                    <h4>
                        {comment?.firstName} {comment?.lastName}
                    </h4>
                </Link>
            </div>
            <div>
                <p className="my-1">{comment?.text}</p>
                <p className="post-date">
                    {moment(comment?.createdAt).format('MMMM Do YYYY, h:mm a')}
                </p>
                {userInfo && userInfo._id === comment?.user && (
                    <button
                        onClick={(e) =>
                            dispatch(deleteComment(postId, comment?._id))
                        }
                        className="btn btn-danger"
                    >
                        {' '}
                        <i className="fas fa-times"></i>
                    </button>
                )}
            </div>
        </div>
    );
};

export default CommentItem;
