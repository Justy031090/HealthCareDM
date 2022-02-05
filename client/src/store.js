import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { alertReducer } from './reducers/alertReducer';
import { userLoginReducer } from './reducers/loginReducer';
import { userRegisterReducer } from './reducers/registerReducer';

const reducer = combineReducers({
    alerts: alertReducer,
    userRegister: userRegisterReducer,
    userLogin: userLoginReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null;

const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
};

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
