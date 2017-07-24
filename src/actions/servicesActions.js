import types from '../constants/';


export function setServiceStatus(mode, status) {
    return {
        type: types.SET_SERVICE_STATUS,
        status,
        mode,
    };
}
