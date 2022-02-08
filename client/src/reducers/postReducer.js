import {
    REQUEST_POSTS,
    GET_POSTS,
    ERROR_POSTS,
    UPDATE_LIKES,
    LIKE_ERROR,
    DELETE_POST,
} from '../constants/posts';
const initialState = {
    posts: [],
    post: [],
};

export const getPostsReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case REQUEST_POSTS:
            return { loading: true };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter((post) => post._id !== payload),
                loading: false,
            };
        case GET_POSTS:
            return { ...state, loading: false, posts: payload };
        case ERROR_POSTS:
            return { ...state, loading: false };
        case UPDATE_LIKES:
            return {
                ...state,
                posts: state.posts.map((post) =>
                    post._id === payload.id
                        ? { ...post, likes: payload.likes }
                        : post
                ),
            };
        case LIKE_ERROR:
            return { ...state, loading: false };
        default:
            return state;
    }
};
