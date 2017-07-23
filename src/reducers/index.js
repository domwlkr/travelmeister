import { combineReducers } from 'redux';
import disruptionsReducer from './disruptions';
import servicesReducer from './services';
import positionReducer from './position';

const rootReducer = combineReducers({
  disruptionsReducer,
  servicesReducer,
  positionReducer,
});

export default rootReducer;
