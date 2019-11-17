import {  CHANGE__LANGUAGE, 
    REGIONS, REGION,  COMITET,ACTIVITIES,SECTIONS,
     ACTIVITIES__PHOTO, NEWSS, EVENTS, LEGALS,LEGALSPHOTO, ADS,ADSPHOTO,TENDERS, TENDERSPHOTO, } from './types';
import Axios from 'axios';


// change language
export const change_language = (text) => dispatch => {
    dispatch({
        type: CHANGE__LANGUAGE,
        payload: text
    })
}


// retrieve all news
export const news = () => dispatch => {
    Axios.get(`http://uz.orikzor.com/newws`).then(response =>{
        
        dispatch({
            type: NEWSS,
            payload: response.data.data
        })
        // console.log(response.data.data)
    })
}


// retrieve all events
export const events = () => dispatch => {
    Axios.get(`http://uz.orikzor.com/events`).then(response =>{
        
        dispatch({
            type: EVENTS,
            payload: response.data
        })
        // console.log(response.data.data)
    })
}

// retrieve all regions
export const regions = () => dispatch => {
    Axios.get(`http://uz.orikzor.com/territories`).then(response =>
        dispatch({
            type: REGIONS,
            payload: response.data
        }));
}

// single region
export const region = (text) => dispatch => {
    dispatch({
        type: REGION,
        payload: text
    })
}


// retrieve legals

export const legals = () => dispatch => {
    Axios.get(`http://uz.orikzor.com/legals`).then(response =>{
        dispatch({
            type: LEGALS,
            payload: response.data.data
        })
    console.log(response.data.data)
    });
    
}

export const legalsphoto = () => dispatch => {
    Axios.get(`http://uz.orikzor.com/legals`).then(response =>{
        dispatch({
            type: LEGALSPHOTO,
            payload: response.data.dataphoto
        })
    });
    
}

// retrieve comitet
export const comitet = () => dispatch => {
    Axios.get(`http://uz.orikzor.com/committees`).then(response =>
        dispatch({
            type: COMITET,
            payload: response.data
        }));
}

export const activities = () => dispatch => {
    Axios.get(`http://uz.orikzor.com/activities`).then(response =>{
        dispatch({
            type: ACTIVITIES,
            payload: response.data.data
            
        })
        console.log(response.data)
     } )
}

export const sections = () => dispatch => {
    Axios.get(`http://uz.orikzor.com/acts`).then(response =>{
        dispatch({
            type: SECTIONS,
            payload: response.data.data
            
        })
     } )
}

export const activities_photos = () => dispatch => {
    Axios.get(`http://uz.orikzor.com/activities`).then(response =>{
        dispatch({
            type: ACTIVITIES__PHOTO,
            payload: response.data.dataphoto
            
        })
        console.log(response.data.dataphoto)
     } )
}


export const ads = () => dispatch => {
    Axios.get(`http://uz.orikzor.com/ads`).then(response =>{
        dispatch({
            type: ADS,
            payload: response.data.data
            
        })
        // console.log(response.data.dataphoto)
     } )
}


export const adsphoto = () => dispatch => {
    Axios.get(`http://uz.orikzor.com/ads`).then(response =>{
        dispatch({
            type: ADSPHOTO,
            payload: response.data.dataphoto
            
        })
        // console.log(response.data.dataphoto)
     } )
}



export const tenders = () => dispatch => {
    Axios.get(`http://uz.orikzor.com/tenders`).then(response =>{
        dispatch({
            type: TENDERS,
            payload: response.data.data
            
        })
        // console.log(response.data.dataphoto)
     } )
}


export const tendersphoto = () => dispatch => {
    Axios.get(`http://uz.orikzor.com/tenders`).then(response =>{
        dispatch({
            type: TENDERSPHOTO,
            payload: response.data.dataphoto
            
        })
        // console.log(response.data.dataphoto)
     } )
}