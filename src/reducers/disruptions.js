import types from '../constants/';

const initialState = {
    disruptions: [],
    loading: false,
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
                ...state.disruptions,
                {
                    id: action.mode,
                    status: action.payload,
                },
            ],
            loading: false,
        };

    default:
        return state;
    }
};

export default disruptionsReducer;
