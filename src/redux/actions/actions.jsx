import { ALL__EVENTS, CHANGE__LANGUAGE, FIND__REGION, CHANGE__REGION__ID, SINGLE__EVENT, COMITET } from './types';
import Axios from 'axios';

export const events_all = (text) => dispatch => {
    Axios.get(`http://uz.orikzor.com/events`).then(response =>
        dispatch({
            type: ALL__EVENTS,
            payload: response.data
        }));
}
export const find_event = (lang, id) => dispatch => {
    Axios.get(`http://localhost/${lang}/news/${id}`).then(response =>
        dispatch({
            type: SINGLE__EVENT,
            payload: response.data
        }));
}

export const change_region_id = (text) => dispatch => {
    dispatch({
        type: CHANGE__REGION__ID,
        payload: text
    })
}

export const change_language = (text) => dispatch => {
    dispatch({
        type: CHANGE__LANGUAGE,
        payload: text
    })
}

export const find_region = (lang, id) => dispatch => {
    Axios.get(`http://localhost/${lang}/regions/${id}`).then(response =>
        dispatch({
            type: FIND__REGION,
            payload: response.data
        }));
}

export const comitet = () => dispatch => {
    Axios.get(`http://uz.orikzor.com/committees`).then(response =>
        dispatch({
            type: COMITET,
            payload: response.data
        }));
}
