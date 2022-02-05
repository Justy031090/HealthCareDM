import axios from 'axios';
import {
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
} from '../constants/auth';
import { setAlert } from './setAlert';

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST,
        });
        const config = {
            header: {
                'Content-Type': 'application/json',
            },
        };
        const body = {
            email,
            password,
        };

        const { data } = await axios.post('/api/auth', body, config);

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data,
        });
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        const errors = error.response.data;
        if (errors) {
            errors.forEach((error) => {
                dispatch(setAlert(error.msg, 'danger'));
            });
        }
        dispatch({
            type: USER_LOGIN_FAIL,
        });
    }
};

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo');
    dispatch({ type: USER_LOGOUT });
};
