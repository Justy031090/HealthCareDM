import {
    ARTICLE_FAIL,
    ARTICLE_REQUEST,
    ARTICLE_SUCCESS,
} from '../constants/article.js';

export const articleReducer = (
    state = { articles: {}, loading: true },
    action
) => {
    const { type, payload } = action;
    switch (type) {
        case ARTICLE_REQUEST:
            return { ...state, loading: true };
        case ARTICLE_SUCCESS:
            return { ...state, loading: false, articles: payload };
        case ARTICLE_FAIL:
            return { ...state, loading: false, error: payload };
        default:
            return state;
    }
};
