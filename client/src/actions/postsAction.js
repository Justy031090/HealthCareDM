import axios from 'axios';
import { setAlert } from './setAlert';
import { GET_POSTS, ERROR_POSTS, REQUEST_POSTS } from '../constants/posts';

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
