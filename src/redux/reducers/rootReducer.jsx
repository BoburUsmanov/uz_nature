import { combineReducers } from 'redux';
import eventsReducer from './eventsReducer';
import languageReducer from './languageReducer';
import regionsReducer from './regionsReducer';
import comitetReducer from './comitetReducer';
import activitiesReducer from './activitiesReducer';
import newsReducer from './newsReducer';
import sectionsReducer from './sectionsReducer';
import legalsReducer from './legalsReducer';
import legalsphotoReducer from './legalsphotoReducer';
import adsReducer from './adsReducer';
import tendersReducer from './tendersReducer';

export default combineReducers({
   news: newsReducer,
   events:eventsReducer,
   lang:languageReducer,
   regions:regionsReducer,
   persons:comitetReducer,
   activities:activitiesReducer,
   sections: sectionsReducer,
   legals: legalsReducer,
   legalsphoto: legalsphotoReducer,
   ads: adsReducer,
   // adsphoto: adsReducer,
    tenders: tendersReducer,
});