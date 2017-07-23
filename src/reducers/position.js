import types from '../constants/';

const initialState = {
    lat: 0,
    long: 0,
};

const positionReducer = (state = initialState, action) => {
    switch (action.type) {
    case types.UPDATE_LAT_LONG:
        return {
            ...state,
            lat: action.lat,
            long: action.long,
        };

    default:
        return state;
    }
};

export default positionReducer;
