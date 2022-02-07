import { REQUEST_POSTS, GET_POSTS, ERROR_POSTS } from '../constants/posts';
const initialState = {
    posts: [],
    post: [],
    error: {},
};

export const getPostsReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case REQUEST_POSTS:
            return { loading: true };
        case GET_POSTS:
            return { loading: false, posts: payload };
        case ERROR_POSTS:
            return { loading: false, error: payload };
        default:
            return state;
    }
};
