import types from '../constants/';
import axios from 'axios';

const actions = {
    getDisruptions() {
        const url = 'http://localhost:3000/api/transactions';
        const request = axios.get(url);

        return {
            type: types.GET_DISRUPTIONS,
            payload: request,
        };
    },
};

export default actions;
