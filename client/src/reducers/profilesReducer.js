import {
    GET_PROFILES_FAIL,
    GET_PROFILES_REQUEST,
    GET_PROFILES_SUCCESS,
    GET_SINGLE_PROFILE_FAIL,
    GET_SINGLE_PROFILE_REQUEST,
    GET_SINGLE_PROFILE_SUCCESS,
} from '../constants/profiles';

export const getProfilesReducer = (state = { profiles: {} }, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_PROFILES_REQUEST:
            return { ...state, loading: true };
        case GET_PROFILES_SUCCESS:
            return { loading: false, profiles: payload };
        case GET_PROFILES_FAIL:
            return { loading: false, error: payload };
        case GET_SINGLE_PROFILE_REQUEST:
            return { ...state, loading: true };
        case GET_SINGLE_PROFILE_SUCCESS:
            return { loading: false, profiles: payload };
        case GET_SINGLE_PROFILE_FAIL:
            return { loading: false, error: payload };
        default:
            return state;
    }
};
