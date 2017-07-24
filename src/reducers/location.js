import types from '../constants/';

const initialState = {
    coords: {
        latitude: 0,
        longitude: 0,
    },
};

const locationReducer = (state = initialState, action) => {
    switch (action.type) {
    case types.GET_LOCATION:
        return action.payload;

    default:
        return state;
    }
};

export default locationReducer;
