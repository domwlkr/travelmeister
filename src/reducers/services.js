import types from '../constants/';

const initialState = {
    services: [
        { mode: 'tube', disruptions: false },
        { mode: 'overground', disruptions: false },
        { mode: 'dlr', disruptions: false },
    ],
};

const servicesReducer = (state = initialState, action) => {
    switch (action.type) {
    case types.SET_SERVICE_STATUS:
        return {
            ...state,
            services: state.services.map((service) => {
                if (service.mode !== action.mode) {
                    return service;
                }

                return {
                    ...service,
                    disruptions: action.status,
                };
            }),
        };

    default:
        return state;
    }
};

export default servicesReducer;
