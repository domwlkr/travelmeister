import types from '../constants/';

const initialState = {
    disruptions: [],
    loading: false,
    error: '',
};

const disruptionsReducer = (state = initialState, action) => {
    switch (action.type) {
    case types.GET_DISRUPTIONSS:
        return {
            ...state,
            loading: true,
        };

    case types.SET_DISRUPTIONS:
        return {
            ...state,
            disruptions: [
                ...state.disruptions,
                action.status,
            ],
            loading: false,
        };

    case types.DISRUPTIONS_ERROR:
        return {
            ...state,
            error: action.error,
            loading: false,
        };

    default:
        return state;
    }
};

export default disruptionsReducer;
