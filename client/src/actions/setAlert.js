import { v4 } from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from '../constants/alert';

export const setAlert =
    (msg, alertType, timeout = 3000) =>
    (dispatch) => {
        const id = v4();
        dispatch({
            type: SET_ALERT,
            payload: { msg, alertType, id },
        });
        setTimeout(
            () => dispatch({ type: REMOVE_ALERT, payload: id }),
            timeout
        );
    };