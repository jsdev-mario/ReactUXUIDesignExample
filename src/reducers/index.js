import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import Settings from './Settings';
import User from './User';
import Ui from './Ui';
import CommonData from './CommonData';
import UserManager from './UserManager';



const reducers = combineReducers ({
    routing: routerReducer,
    settings: Settings,
    user: User,
    commondata: CommonData,
    ui: Ui,
    usermanager: UserManager,
});

export default reducers;
