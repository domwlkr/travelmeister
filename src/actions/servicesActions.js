import types from '../constants/';

const servicesActions = {
    setServiceStatus(mode, status) {
        return {
            type: types.SET_SERVICE_STATUS,
            status,
            mode,
        };
    },
};

export default servicesActions;
