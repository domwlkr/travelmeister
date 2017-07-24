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

    case types.GET_STATIONS_SUCCESS:
        return {
            ...state,
            stations: state.stations
                .slice(0, 0)
                .concat(action.stations),
            loading: false,
        };

    case types.GET_STATIONS_FAILURE:
        return {
            ...state,
            error: action.error,
            loading: false,
        };

    case types.CLEAR_STATIONS:
        return {
            ...state,
            stations: state.stations
                .slice(0, 0),
        };

    default:
        return state;
    }
};

export default stationsReducer;
