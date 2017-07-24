import axios from 'axios';
import types from '../constants/';

export function getDisruptions(mode) {
    const url = `https://api.tfl.gov.uk/Line/Mode/${mode}/Disruption`;
    const request = axios.get(url);

    return {
        type: types.GET_DISRUPTIONS,
        payload: request,
    };
}

export function getDisruptionsSuccess(status) {
    return {
        type: types.GET_DISRUPTIONS_SUCCESS,
        status,
    };
}

export function getDisruptionsFailure(error) {
    return {
        type: types.GET_DISRUPTIONS_FAILURE,
        error,
    };
}

export function clearDisruptions() {
    return {
        type: types.CLEAR_DISRUPTIONS,
    };
}
