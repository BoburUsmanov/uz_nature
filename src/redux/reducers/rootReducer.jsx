import { combineReducers } from 'redux';
import eventsReducer from './eventsReducer';
import languageReducer from './languageReducer';
import regionReducer from './regionReducer';
import comitetReducer from './comitetReducer';

export default combineReducers({
   events: eventsReducer,
   lang:languageReducer,
   region:regionReducer,
   persons:comitetReducer
});