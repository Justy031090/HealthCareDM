import axios from 'axios';
import { setAlert } from './setAlert';
import {
    GET_POSTS,
    ERROR_POSTS,
    REQUEST_POSTS,
    UPDATE_LIKES,
    LIKE_ERROR,
} from '../constants/posts';

export const getPosts = () => async (dispatch, getState) => {
    try {
        const {
            userLogin: { userInfo },
        } = getState();

        dispatch({
            type: REQUEST_POSTS,
        });
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const { data } = await axios.get('/api/post', config);

        dispatch({
            type: GET_POSTS,
            payload: data,
        });
    } catch (error) {
        const errors = error.response.data;
        if (errors) {
            errors.forEach((error) => {
                dispatch(setAlert(error.msg, 'danger'));
            });
        }

        dispatch({
            type: ERROR_POSTS,
        });
    }
};

export const addLike = (id) => async (dispatch, getState) => {
    console.log('hi from addLike');
    try {
        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const { data } = await axios.put(`/api/post/like/${id}`, {}, config);
        dispatch({
            type: UPDATE_LIKES,
            payload: { id, likes: data },
        });
    } catch (error) {
        const errors = error.response?.data;
        if (errors) {
            errors.forEach((error) => {
                dispatch(setAlert(error.msg, 'danger'));
            });
        }

        dispatch({
            type: LIKE_ERROR,
        });
    }
};

export const removeLike = (id) => async (dispatch, getState) => {
    try {
        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const { data } = await axios.put(`/api/post/unlike/${id}`, {}, config);

        dispatch({
            type: UPDATE_LIKES,
            payload: { id, likes: data },
        });
    } catch (error) {
        const errors = await error.response?.data;
        if (errors) {
            errors.forEach((error) => {
                dispatch(setAlert(error.msg, 'danger'));
            });
        }

        dispatch({
            type: LIKE_ERROR,
        });
    }
};
