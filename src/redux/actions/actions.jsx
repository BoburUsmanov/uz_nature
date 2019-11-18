import {  CHANGE__LANGUAGE, 
    REGIONS, REGION,  COMITET,ACTIVITIES,SECTIONS,
     ACTIVITIES__PHOTO, NEWSS, EVENTS, LEGALS,LEGALSPHOTO, ADS,ADSPHOTO,TENDERS, TENDERSPHOTO, ECONOMICS,
     RELEASES,INTERVIEWS,VACATIONS,JOBS,CAREERS,SERVICES,OPENS,PHOTOS,PHOTOSS,ARCHIVES,DOCUMENTS} from './types';
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
     } )
}

export const economics = () => dispatch => {
    Axios.get(`http://uz.orikzor.com/economics`).then(response =>{
        dispatch({
            type: ECONOMICS,
            payload: response.data.data
        })
     } )
}


export const releases = () => dispatch => {
    Axios.get(`http://uz.orikzor.com/releases`).then(response =>{
        dispatch({
            type: RELEASES,
            payload: response.data.data
        })
     } )
}


export const interviews = () => dispatch => {
    Axios.get(`http://uz.orikzor.com/interviews`).then(response =>{
        dispatch({
            type: INTERVIEWS,
            payload: response.data.data
        })
     } )
}


export const vacations = () => dispatch => {
    Axios.get(`http://uz.orikzor.com/vacations`).then(response =>{
        dispatch({
            type: VACATIONS,
            payload: response.data.data
        })
     } )
}



export const jobs = () => dispatch => {
    Axios.get(`http://uz.orikzor.com/jobs`).then(response =>{
        dispatch({
            type: JOBS,
            payload: response.data.data
        })
     } )
}


export const careers = () => dispatch => {
    Axios.get(`http://uz.orikzor.com/careers`).then(response =>{
        dispatch({
            type: CAREERS,
            payload: response.data.data
        })
     } )
}


export const services = () => dispatch => {
    Axios.get(`http://uz.orikzor.com/services`).then(response =>{
        dispatch({
            type: SERVICES,
            payload: response.data.data
        })
     } )
}

export const opens = () => dispatch => {
    Axios.get(`http://uz.orikzor.com/opens`).then(response =>{
        dispatch({
            type: OPENS,
            payload: response.data
        })
     } )
}


export const photos = () => dispatch => {
    Axios.get(`http://uz.orikzor.com/photos`).then(response =>{
        dispatch({
            type: PHOTOS,
            payload: response.data.data
        })
     } )
}

export const photoss = () => dispatch => {
    Axios.get(`http://uz.orikzor.com/photos`).then(response =>{
        dispatch({
            type: PHOTOSS,
            payload: response.data.dataphoto
        })
     } )
}

export const archives = () => dispatch => {
    Axios.get(`http://uz.orikzor.com/archives`).then(response =>{
        dispatch({
            type: ARCHIVES,
            payload: response.data
        })
     } )
}


export const documents = () => dispatch => {
    Axios.get(`http://uz.orikzor.com/forms`).then(response =>{
        dispatch({
            type: DOCUMENTS,
            payload: response.data
        })
     } )
}