/* global navigator */

import types from '../constants/';

const locationActions = {
    getLocation() {
        const geolocation = navigator.geolocation;

        const location = new Promise((resolve, reject) => {
            if (!geolocation) {
                reject(new Error('Not Supported'));
            }

            geolocation.getCurrentPosition((position) => {
                resolve(position);
            }, () => {
                reject(new Error('Permission denied'));
            });
        });

        return {
            type: types.GET_LOCATION,
            payload: location,
        };
    },
};

export default locationActions;
