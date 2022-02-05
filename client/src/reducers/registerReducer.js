import {
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
} from '../constants/auth';

export const userRegisterReducer = (state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case USER_REGISTER_REQUEST:
            return { loading: true };
        case USER_REGISTER_SUCCESS:
            return { loading: false, userInfo: payload };
        case USER_REGISTER_FAIL:
            return { loading: false, error: payload };
        default:
            return state;
    }
};
