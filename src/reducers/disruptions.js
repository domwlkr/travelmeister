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

    case types.GET_DISRUPTIONS_SUCCESS:
        return {
            ...state,
            disruptions: [
                action.status,
            ],
            loading: false,
        };

    case types.GET_DISRUPTIONS_FAILURE:
        return {
            ...state,
            error: action.error,
            loading: false,
        };

    case types.CLEAR_DISRUPTIONS:
        return {
            ...state,
            disruptions: state.disruptions
                .slice(0, 0),
        };

    default:
        return state;
    }
};

export default disruptionsReducer;
