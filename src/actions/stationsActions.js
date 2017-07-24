import axios from 'axios';
import types from '../constants/';

const stationsActions = {
    getStations(mode, lat, lon) {
        const url = `https://api.tfl.gov.uk/Stoppoint?lat=${lat}&lon=${lon}&stoptypes=NaptanMetroStation,NaptanRailStation&radius=800&modes=${mode}&returnLines=true`;
        const request = axios.get(url);

        return {
            type: types.GET_STATIONS,
            payload: request,
        };
    },

    setStations(stations) {
        return {
            type: types.SET_STATIONS,
            stations,
        };
    },

    stationsError(error) {
        return {
            type: types.STATIONS_ERROR,
            error,
        };
    },
};

export default stationsActions;
