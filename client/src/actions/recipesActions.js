import axios from 'axios';
import {
    RECIPE_BY_ID_FAIL,
    RECIPE_BY_ID_REQUEST,
    RECIPE_BY_ID_SUCCESS,
    RECIPE_FAIL,
    RECIPE_REQUEST,
    RECIPE_SUCCESS,
} from '../constants/recipes';
import { setAlert } from './setAlert';

export const getRecipes = () => async (dispatch) => {
    try {
        dispatch({
            type: RECIPE_REQUEST,
        });
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const { data } = await axios.get('/api/recipes', config);
        dispatch({
            type: RECIPE_SUCCESS,
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
            type: RECIPE_FAIL,
            payload: errors,
        });
    }
};

export const getRecipeById = (id) => async (dispatch) => {
    try {
        dispatch({
            type: RECIPE_BY_ID_REQUEST,
        });
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const { data } = await axios.get(`/api/recipes/${id}`, config);
        dispatch({
            type: RECIPE_BY_ID_SUCCESS,
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
            type: RECIPE_BY_ID_FAIL,
        });
    }
};
