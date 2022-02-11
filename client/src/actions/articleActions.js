import axios from 'axios';
import {
    ARTICLE_BY_ID_FAIL,
    ARTICLE_BY_ID_REQUEST,
    ARTICLE_BY_ID_SUCCESS,
    ARTICLE_FAIL,
    ARTICLE_REQUEST,
    ARTICLE_SUCCESS,
} from '../constants/article';
import { setAlert } from './setAlert';

export const getArticales = () => async (dispatch) => {
    try {
        dispatch({
            type: ARTICLE_REQUEST,
        });
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const { data } = await axios.get('/api/articles', config);
        dispatch({
            type: ARTICLE_SUCCESS,
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
            type: ARTICLE_FAIL,
            payload: errors,
        });
    }
};

export const getArticleById = (id) => async (dispatch) => {
    try {
        dispatch({
            type: ARTICLE_BY_ID_REQUEST,
        });
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const { data } = await axios.get(`/api/articles/${id}`, config);
        dispatch({
            type: ARTICLE_BY_ID_SUCCESS,
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
            type: ARTICLE_BY_ID_FAIL,
        });
    }
};
