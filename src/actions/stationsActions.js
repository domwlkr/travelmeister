import axios from 'axios';
import types from '../constants/';

export function getStations(mode, lat, lon) {
    const url = `https://api.tfl.gov.uk/Stoppoint?lat=${lat}&lon=${lon}&stoptypes=NaptanMetroStation,NaptanRailStation&radius=800&modes=${mode}&returnLines=true`;
    const request = axios.get(url);

    return {
        type: types.GET_STATIONS,
        payload: request,
    };
}

export function getStationsSuccess(stations) {
    return {
        type: types.GET_STATIONS_SUCCESS,
        stations,
    };
}

export function getStationsFailure(error) {
    return {
        type: types.GET_STATIONS_FAILURE,
        error,
    };
}
