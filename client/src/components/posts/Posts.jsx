import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getPosts } from '../../actions/postsAction';
import PostItem from './PostItem';
import PostForm from './PostForm';
import './posts.css';

const Posts = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const postState = useSelector((state) => state.post);
    const { posts, loading } = postState;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        if (!userInfo) return navigate('/login');
        dispatch(getPosts());
    }, [navigate, dispatch, userInfo]);

    return loading ? (
        <div className="loader"></div>
    ) : (
        <div className="posts-container">
            <h2 className="large text-primary">Posts</h2>
            <p className="lead">
                <i className="fas fa-user"></i>Welcome To Our Community
            </p>
            <PostForm />
            <div className="posts">
                {posts?.map((post) => {
                    return <PostItem key={post._id} post={post} />;
                })}
            </div>
        </div>
    );
};

export default Posts;
