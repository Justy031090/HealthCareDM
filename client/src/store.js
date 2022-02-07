import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { alertReducer } from './reducers/alertReducer';
import { userLoginReducer } from './reducers/loginReducer';
import { userRegisterReducer } from './reducers/registerReducer';
import { userDetailsReducer } from './reducers/userDetailsReducer';
import { getProfilesReducer } from './reducers/profilesReducer';

const reducer = combineReducers({
    alerts: alertReducer,
    userRegister: userRegisterReducer,
    userLogin: userLoginReducer,
    userDetails: userDetailsReducer,
    profiles: getProfilesReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null;
const userProfileFromStorage = localStorage.getItem('userProfile')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null;

const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
    userDetails: { profile: userProfileFromStorage },
};

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
