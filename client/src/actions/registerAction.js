import axios from 'axios';
import {
    USER_LOGIN_SUCCESS,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
} from '../constants/auth';
import { setAlert } from './setAlert';

export const register =
    (firstName, lastName, email, password) => async (dispatch) => {
        try {
            dispatch({
                type: USER_REGISTER_REQUEST,
            });
            const config = {
                header: {
                    'Content-Type': 'application/json',
                },
            };
            const body = {
                firstName,
                lastName,
                email,
                password,
            };

            const { data } = await axios.post('/api/users', body, config);

            dispatch({
                type: USER_REGISTER_SUCCESS,
                payload: data,
            });
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
                type: USER_REGISTER_FAIL,
            });
        }
    };
