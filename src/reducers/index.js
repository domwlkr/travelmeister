import { combineReducers } from 'redux';
import disruptionsReducer from './disruptions';
import servicesReducer from './services';

const rootReducer = combineReducers({
  disruptionsReducer,
  servicesReducer,
});

export default rootReducer;
