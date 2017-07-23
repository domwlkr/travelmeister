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
};

export default disruptionsActions;
