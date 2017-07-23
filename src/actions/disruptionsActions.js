import axios from 'axios';
import types from '../constants/';

const disruptionsActions = {
    getDisruptions(mode) {
        const url = `https://api.tfl.gov.uk/Line/Mode/${mode}/Disruption`;
        const request = axios.get(url);

        return {
            type: types.GET_DISRUPTIONS,
            payload: request,
        };
    },

    setDisruptions(status) {
        return {
            type: types.SET_DISRUPTIONS,
            status,
        };
    },

    disruptionsError(error) {
        return {
            type: types.DISRUPTIONS_ERROR,
            error,
        };
    },
};

export default disruptionsActions;
