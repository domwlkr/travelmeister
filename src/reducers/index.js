import { combineReducers } from 'redux';
import disruptionsReducer from './disruptions';
import servicesReducer from './services';
import locationReducer from './location';

const rootReducer = combineReducers({
    disruptionsReducer,
    servicesReducer,
    locationReducer,
});

export default rootReducer;
