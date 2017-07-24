import { combineReducers } from 'redux';
import disruptionsReducer from './disruptions';
import servicesReducer from './services';
import locationReducer from './location';
import stationsReducer from './stations';

const rootReducer = combineReducers({
    disruptionsReducer,
    servicesReducer,
    locationReducer,
    stationsReducer,
});

export default rootReducer;
