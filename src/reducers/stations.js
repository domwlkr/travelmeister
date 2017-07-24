import types from '../constants/';

const initialState = {
    stations: [],
    loading: false,
    error: '',
};

const stationsReducer = (state = initialState, action) => {
    switch (action.type) {
    case types.GET_STATIONS:
        return {
            ...state,
            loading: true,
        };

    case types.SET_STATIONS:
        return {
            ...state,
            stations: state.stations
                .slice(0, 0)
                .concat(action.stations),
            loading: false,
        };

    default:
        return state;
    }
};

export default stationsReducer;
