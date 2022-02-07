import axios from 'axios';
import {
    GET_PROFILES_FAIL,
    GET_PROFILES_SUCCESS,
    GET_PROFILES_REQUEST,
    GET_SINGLE_PROFILE_FAIL,
    GET_SINGLE_PROFILE_SUCCESS,
    GET_SINGLE_PROFILE_REQUEST,
} from '../constants/profiles';
import { setAlert } from './setAlert';

export const getProfiles = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_PROFILES_REQUEST,
        });
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const { data } = await axios.get('/api/profile', config);
        dispatch({
            type: GET_PROFILES_SUCCESS,
            payload: data,
        });
    } catch (error) {
        const errors = error.response;
        if (errors) {
            errors.forEach((error) => {
                dispatch(setAlert(error.msg, 'danger'));
            });
        }

        dispatch({
            type: GET_PROFILES_FAIL,
        });
    }
};

export const getProfilesById = (id) => async (dispatch) => {
    try {
        dispatch({
            type: GET_SINGLE_PROFILE_REQUEST,
        });
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const { data } = await axios.get(`/api/profile/user/${id}`, config);
        dispatch({
            type: GET_SINGLE_PROFILE_SUCCESS,
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
            type: GET_SINGLE_PROFILE_FAIL,
        });
    }
};
