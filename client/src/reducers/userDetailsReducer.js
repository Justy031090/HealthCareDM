import { CLEAR_PROFILE } from '../constants/userDetails';
import {
    USER_DETAILS_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
} from '../constants/userDetails';

// let profile = {
//     company: '',
//     status: '',
//     linkedin: '',
//     youtube: '',
//     instagram: '',
//     facebook: '',
//     twitter: '',
//     school: '',
//     degree: '',
//     fieldOfStudy: '',
//     description: '',
//     insulinSensitivity: '',
//     insulinCarbRatio: '',
//     website: '',
//     location: '',
//     bio: '',
// };

export const userDetailsReducer = (state = { profile: {} }, action) => {
    const { type, payload } = action;
    switch (type) {
        case USER_DETAILS_REQUEST:
            return { ...state, loading: true };
        case USER_DETAILS_SUCCESS:
            return { ...state, loading: false, profile: payload };
        case USER_DETAILS_FAIL:
            return { ...state, loading: false, error: payload };
        case CLEAR_PROFILE:
            return {};
        default:
            return state;
    }
};
