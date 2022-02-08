import axios from 'axios';
import {
    USER_DETAILS_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
} from '../constants/userDetails';
import { setAlert } from './setAlert';

export const getUserDetails = () => async (dispatch, getState) => {
    try {
        const {
            userLogin: { userInfo },
        } = getState();
        console.log(userInfo);
        dispatch({
            type: USER_DETAILS_REQUEST,
        });
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const { data } = await axios.get('/api/profile/me', config);
        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data,
        });
        localStorage.setItem('userProfile', JSON.stringify(data));
    } catch (error) {
        const errors = error.response.data;
        if (errors) {
            errors.forEach((error) => {
                dispatch(setAlert(error.msg, 'danger'));
            });
        }

        dispatch({
            type: USER_DETAILS_FAIL,
        });
    }
};

export const createUpdateProfile = (body) => async (dispatch, getState) => {
    try {
        const {
            userLogin: { userInfo },
        } = getState();

        dispatch({
            type: USER_DETAILS_REQUEST,
        });

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const { data } = await axios.post('/api/profile', body, config);
        if (!data) dispatch(setAlert('Your Pofile Is Empty'));

        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data,
        });
        localStorage.setItem('userProfile', JSON.stringify(data));
        dispatch(setAlert('Profile has been Updated', 'success', 2000));
    } catch (error) {
        const errors = error.response.data;
        if (errors) {
            errors.forEach((error) => {
                dispatch(setAlert(error.msg, 'danger'));
            });
        }
        dispatch({
            type: USER_DETAILS_FAIL,
        });
    }
};
